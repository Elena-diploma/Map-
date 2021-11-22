export default class Settings {
    constructor() {
        this.themes = ['light', 'gray', 'dark'];
        this.music = ['trance','pop', 'rock', 'chillout', 'off'];
        this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];
        this.defaultPreferences = new Map([
            ['theme', this.themes[2]],
            ['music', this.music[0]],
            ['difficulty', this.difficulty[0]],
        ]);
        this.userPreferences = new Map();
    }

    setParam(key, value) {
        if(this.defaultPreferences.has(key)) {
            switch (key) {
                case 'theme':
                    if(!this.themes.includes(value)) { return false; }
                    break;
                case 'music':
                    if(!this.music.includes(value)) { return false; }
                    break;
                case 'difficulty':
                    if(!this.difficulty.includes(value)) { return false; }
                    break;
            }
            this.userPreferences.set(key, value);
            return true;
        }
        return false;
    }

    getSettings() {
        const mergedPreferences = new Map();
        this.defaultPreferences.forEach((value, key) => {
            if(this.userPreferences.has(key)) {
                mergedPreferences.set(key, this.userPreferences.get(key));
            } else {
                mergedPreferences.set(key, value);
            }
            });
        return mergedPreferences;
    }
}