type Mods = Record<string, boolean | string>;

function classNames(
    cls: string,
    mods: Mods = {},
    additional: (string | undefined | boolean)[] = [],
): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).reduce((prev, [key, value]) => {
            if (value) {
                prev.push(key);
            }
            return prev;
        }, [] as string[]),
    ].join(" ");
}

export default classNames;
