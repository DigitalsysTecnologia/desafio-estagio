import TrackPlayer, {
    AppKilledPlaybackBehavior,
    RepeatMode,
} from 'react-native-track-player';

export async function setupPlayer() {
    let isSetup = false;
    try {
        await TrackPlayer.getActiveTrackIndex();
        isSetup = true;
    }
    catch {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            android: {
                appKilledPlaybackBehavior:
                    AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
            },
            capabilities: [],
            compactCapabilities: [],
            progressUpdateEventInterval: 2,
        });

        isSetup = true;
    }
    finally {
        return isSetup;
    }
}

export async function addTracks() {
    await TrackPlayer.add([
        {
            id: '1',
            url: require('./assets/songs/background.mp3'),
        }
    ]);

    await TrackPlayer.setVolume(1);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    await play();
}

export async function play(){
    await TrackPlayer.play();
}

export async function stop(){
    await TrackPlayer.stop();
}

export async function playbackService() {
    // TODO: Attach remote event handlers
}