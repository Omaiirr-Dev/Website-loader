/**
 * Simple Adult Content Filter
 * Comprehensive detection for adult content
 */

class SimpleAdultFilter {
    constructor() {
        // Comprehensive adult keywords list
        this.adultKeywords = [
            // Core porn terms
            'porn', 'porno', 'pornography', 'xxx', 'x-rated', 'nsfw', 'adult', 'explicit',
            
            // Major porn sites
            'pornhub', 'xvideos', 'xhamster', 'redtube', 'youporn', 'xtube', 'beeg', 'tube8',
            'spankwire', 'xnxx', 'tnaflix', 'empflix', 'drtuber', 'vporn', 'spankbang', 'eporner',
            
            // Body parts
            'boobs', 'tits', 'titty', 'titties', 'breast', 'breasts', 'nipple', 'nipples',
            'ass', 'butt', 'buttocks', 'pussy', 'vagina', 'cunt', 'twat', 'cock', 'dick',
            'penis', 'balls', 'testicles', 'nuts', 'scrotum',
            
            // Sexual acts
            'fuck', 'fucking', 'fucked', 'fucker', 'fucks', 'sex', 'sexual', 'bang', 'banging',
            'screw', 'screwing', 'pound', 'pounding', 'slam', 'slamming', 'thrust', 'thrusting',
            'penetrate', 'penetration', 'suck', 'sucking', 'lick', 'licking', 'blow', 'blowing',
            'ride', 'riding', 'mount', 'mounting', 'pump', 'pumping', 'drill', 'drilling',
            
            // Explicit sexual acts
            'blowjob', 'bj', 'handjob', 'hj', 'footjob', 'titjob', 'rimjob', 'anal', 'oral',
            'threesome', 'foursome', 'gangbang', 'orgy', 'bukkake', 'creampie', 'dp',
            
            // Masturbation terms
            'fap', 'fapping', 'fapper', 'masturbate', 'masturbation', 'jerk', 'jerking',
            'jerkoff', 'wank', 'wanking', 'stroke', 'stroking', 'rub', 'rubbing',
            
            // Orgasm terms
            'cum', 'cumming', 'come', 'coming', 'orgasm', 'climax', 'ejaculate', 'ejaculation',
            'squirt', 'squirting', 'release', 'finish', 'finishing', 'peak', 'peaking',
            
            // Adult industry
            'pornstar', 'porn-star', 'escort', 'prostitute', 'hooker', 'whore', 'slut',
            'stripper', 'stripping', 'strip', 'camgirl', 'camboy', 'camshow', 'webcam',
            
            // Cam sites
            'chaturbate', 'myfreecams', 'cam4', 'bongacams', 'stripchat', 'camsoda',
            'livejasmin', 'flirt4free', 'streamate', 'imlive', 'onlyfans',
            
            // Premium sites
            'brazzers', 'realitykings', 'bangbros', 'naughtyamerica', 'digitalplayground',
            'twistys', 'babes', 'mofos', 'teamskeet',
            
            // Categories
            'milf', 'gilf', 'teen', 'mature', 'young', 'bbw', 'ebony', 'asian', 'latina',
            'blonde', 'brunette', 'redhead', 'amateur', 'professional', 'homemade',
            
            // Fetish/BDSM
            'bdsm', 'bondage', 'domination', 'submission', 'dom', 'sub', 'slave', 'master',
            'mistress', 'fetish', 'kink', 'kinky', 'roleplay', 'cosplay',
            
            // Clothing/lingerie
            'lingerie', 'underwear', 'panties', 'bra', 'stockings', 'pantyhose',
            'leather', 'latex', 'rubber', 'vinyl',
            
            // Hentai/anime
            'hentai', 'ecchi', 'ahegao', 'oppai', 'loli', 'shota', 'yaoi', 'yuri',
            'doujin', 'hentaihaven', 'nhentai', 'rule34',
            
            // Dating/hookup
            'hookup', 'hook-up', 'dating', 'meet', 'encounter', 'affair',
            'adultfriendfinder', 'ashley madison', 'fuckbook', 'sexmeet', 'adulthookup',
            'sugardaddy', 'sugar-daddy', 'sugarbaby', 'sugar-baby',
            
            // States/descriptors
            'nude', 'naked', 'topless', 'bottomless', 'undressed', 'exposed',
            'horny', 'aroused', 'excited', 'turned-on', 'hard', 'erect', 'stiff',
            'wet', 'moist', 'dripping', 'soaked', 'tight', 'loose',
            
            // Slang
            'naughty', 'dirty', 'filthy', 'nasty', 'wild', 'crazy', 'kinky',
            'hardcore', 'softcore', 'extreme', 'rough', 'gentle', 'tender',
            
            // Live content
            'live', 'stream', 'streaming', 'broadcast', 'show', 'performance',
            'private', 'exclusive', 'premium', 'vip',
            
            // Common misspellings
            'pr0n', 'p0rn', 'sexxx', 'sexx', 'fucc', 'fuk', 'phuck',
            'azz', 'bewbs', 'bewbz', 'd1ck', 'c0ck', 'pu55y',
            
            // Additional explicit terms
            'erotic', 'erotica', 'sensual', 'intimate', 'passionate', 'lustful',
            'desire', 'pleasure', 'satisfaction', 'fantasy', 'forbidden',
            
            // More body descriptors
            'big', 'huge', 'massive', 'giant', 'small', 'tiny', 'petite',
            'thick', 'curvy', 'slim', 'skinny', 'fat', 'chubby',
            'natural', 'fake', 'enhanced', 'silicone', 'implants',
            'shaved', 'hairy', 'trimmed', 'smooth', 'waxed',
            
            // Action descriptors
            'slow', 'fast', 'deep', 'shallow', 'rough', 'gentle', 'hard', 'soft',
            'intense', 'passionate', 'wild', 'crazy', 'insane', 'extreme',
            
            // Positions
            'doggy', 'missionary', 'cowgirl', 'reverse', 'sideways', 'standing',
            
            // More sites/platforms
            'imagefap', 'gelbooru', 'danbooru', 'e621', 'sankaku', 'pixiv',
            'tsumino', 'exhentai', 'fakku', 'hanime', '9hentai'
        ];
        
        // Major adult domains
        this.adultDomains = [
            'pornhub.com', 'xvideos.com', 'xhamster.com', 'redtube.com', 'youporn.com',
            'chaturbate.com', 'onlyfans.com', 'brazzers.com', 'realitykings.com',
            'nhentai.net', 'rule34.xxx', 'e621.net', 'gelbooru.com', 'danbooru.donmai.us',
            'spankbang.com', 'eporner.com', 'tube8.com', 'beeg.com', 'xnxx.com'
        ];
        
        this.threshold = 1; // Just need one clear match
    }
    
    isAdultContent(url, title = '', description = '') {
        const text = `${url} ${title} ${description}`.toLowerCase();
        
        // Check domains first
        for (const domain of this.adultDomains) {
            if (text.includes(domain)) {
                return true;
            }
        }
        
        // Check keywords with word boundaries
        for (const keyword of this.adultKeywords) {
            const regex = new RegExp('\\b' + keyword + '\\b', 'i');
            if (regex.test(text)) {
                return true;
            }
        }
        
        return false;
    }
    
    processDumpSites(dumpString) {
        const lines = dumpString.split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('#'));
        
        const results = {
            total: lines.length,
            adultSites: [],
            cleanSites: []
        };
        
        lines.forEach(line => {
            if (this.isAdultContent(line)) {
                results.adultSites.push(line);
            } else {
                results.cleanSites.push(line);
            }
        });
        
        return results;
    }
}

// Make it available globally
if (typeof window !== 'undefined') {
    window.SimpleAdultFilter = SimpleAdultFilter;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimpleAdultFilter;
}