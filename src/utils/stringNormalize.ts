export function stringNormalize(str: string): string {
    // remove word accents, spaces and change to lower case
    const strNormalized = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, "-");

    return strNormalized;
}