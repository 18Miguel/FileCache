declare class FileCache {
    constructor(filename?: string);
    #loadCache(): void;
    #saveCache(): void;
    has(key: string): boolean;
    set(key: string, value: any): void;
    get(key: string): any;
    take(key: string): any;
    delete(key: string): void;
    clear(): void;
}

export = FileCache;
