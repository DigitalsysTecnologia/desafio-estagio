export type CharacterType = {
    id: number,
    name: string,
    title: string,
    class: string,
    classDescription: string,
    history: string,
    profilePicture: string,
    picture: string,
};
export type AdventureType = {
    id: number,
    title: string,
    local: string,
    goals: string[],
    plot: string,
    picture: string,
};