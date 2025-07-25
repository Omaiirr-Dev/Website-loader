/**
 * Adult Content Detection System
 * Detects adult/x-rated content based on URL and content analysis
 */

class AdultContentDetector {
    constructor() {
        // Load keywords from the comprehensive list
        this.adultKeywords = this.loadKeywordsFromList();
        
        // Known adult websites (domains) - MASSIVE EXPANSION
        this.adultDomains = [
            // Major porn sites
            'xhamster', 'xvideos', 'pornhub', 'redtube', 'youporn', 'xtube',
            'beeg', 'tube8', 'spankwire', 'fapdu', 'xnxx',
            'tnaflix', 'empflix', 'mofosex', 'drtuber', 'vporn', 'ah-me',
            'fuq', 'wetplace', 'slutload', 'madthumbs', 'gotporn', 'freeones',
            'data18', 'iafd', 'boobpedia', 'freeadultcomix', 'hentaifoundry',
            'rule34', 'e621', 'gelbooru', 'danbooru', 'sankaku', 'pixiv',
            'nhentai', 'tsumino', 'exhentai', 'sadpanda', 'fakku', 'hanime',
            'hentaihaven', '9hentai', 'multporn', 'chaturbate', 'myfreecams',
            'cam4', 'bongacams', 'stripchat', 'camsoda', 'livejasmin',
            'flirt4free', 'streamate', 'imlive', 'adultfriendfinder',
            'ashley madison', 'seeking', 'benaughty', 'adulttime', 'brazzers',
            'realitykings', 'bangbros', 'naughtyamerica', 'digitalplayground',
            
            // Additional major sites
            'pornmd', 'thumbzilla', 'nuvid', 'sunporno', 'analdin', 'upornia',
            'txxx', 'hdzog', 'ok.xxx', 'porntrex', 'zbporn', 'porngo', 'vjav',
            'javhd', 'javmost', 'javfree', 'javbank', 'javdoe', 'javguru',
            'spankbang', 'eporner', 'porndig', 'pornhat', 'pornone', 'pornsos',
            'pornktube', 'pornerbros', 'porndoe', 'pornoxo', 'pornhits',
            'pornzog', 'pornwhite', 'pornpics', 'pornpro', 'pornmax',
            
            // Cam sites
            'cam4', 'chaturbate', 'myfreecams', 'livejasmin', 'stripchat',
            'bongacams', 'camsoda', 'flirt4free', 'streamate', 'imlive',
            'camster', 'camcontacts', 'jerkmate', 'slutroulette', 'cams',
            'livesex', 'sexcam', 'webcam', 'camgirl', 'camboy', 'camshow',
            
            // Dating/hookup sites
            'adultfriendfinder', 'ashley madison', 'seeking', 'benaughty',
            'fuckbook', 'hookup', 'sexmeet', 'adultmeet', 'sexdating',
            'naughtydate', 'wildmeet', 'sexhookup', 'adulthookup',
            
            // Premium sites
            'brazzers', 'realitykings', 'bangbros', 'naughtyamerica',
            'digitalplayground', 'twistys', 'babes', 'mofos', 'teamskeet',
            'familystrokes', 'daughterswap', 'sislovesme', 'mybabysittersclub',
            
            // Hentai/anime
            'hentaihaven', 'hanime', 'nhentai', 'hentai2read', 'hentaimama',
            'hentaistream', 'hentaigasm', 'hentaikey', 'hentaicloud',
            'hentaiworld', 'animeporn', 'cartoonporn', 'rule34', 'e621',
            
            // Image sites
            'imagefap', 'xhamsterlive', 'pornpics', 'sex', 'nude', 'naked',
            'boobs', 'tits', 'ass', 'pussy', 'cock', 'dick', 'penis',
            
            // Common patterns
            'xxx', 'sex', 'porn', 'adult', 'nude', 'naked', 'hot', 'sexy',
            'fap', 'cum', 'orgasm', 'masturbate', 'jerk', 'wank', 'stroke',
            
            // Additional major sites from keyword expansion
            'spankbang', 'eporner', 'porndig', 'pornhat', 'pornone', 'pornsos',
            'pornktube', 'pornerbros', 'porndoe', 'pornoxo', 'pornhits',
            'pornzog', 'pornwhite', 'pornpics', 'pornpro', 'pornmax',
            'pornmd', 'thumbzilla', 'nuvid', 'sunporno', 'analdin', 'upornia',
            'txxx', 'hdzog', 'porntrex', 'zbporn', 'porngo', 'vjav',
            'javhd', 'javmost', 'javfree', 'javbank', 'javdoe', 'javguru',
            'imagefap', 'xhamsterlive', 'pornhd', 'hdporn', '4tube', 'xtits',
            
            // Cam and live sites
            'camster', 'camcontacts', 'jerkmate', 'slutroulette', 'cams',
            'livesex', 'sexcam', 'camwhores', 'camsex', 'camslut', 'camfuze',
            'camversity', 'camplace', 'camrabbit', 'camwithher', 'camwithcarmen',
            'camgasm', 'camcrush', 'camfrog', 'camzap', 'camsurf', 'camroulette',
            
            // Dating and hookup sites
            'fuckbook', 'hookup', 'sexmeet', 'adultmeet', 'sexdating',
            'naughtydate', 'wildmeet', 'sexhookup', 'adulthookup', 'fuckbuddies',
            'sexfinder', 'adultfinder', 'booty', 'bootycall', 'quicksex',
            'instantfuck', 'fastfuck', 'easysex', 'freesex', 'localsex',
            'nearbysluts', 'slutfinder', 'fucklocals', 'sexlocals',
            
            // Premium adult sites
            'twistys', 'babes', 'mofos', 'teamskeet', 'familystrokes',
            'daughterswap', 'sislovesme', 'mybabysittersclub', 'stepsiblings',
            'stepsisters', 'stepbrothers', 'stepmom', 'stepdad', 'stepdaughter',
            'stepson', 'familytherapy', 'familysinners', 'familyhookups',
            
            // Hentai and anime sites
            'hentai2read', 'hentaimama', 'hentaistream', 'hentaigasm',
            'hentaikey', 'hentaicloud', 'hentaiworld', 'animeporn', 'cartoonporn',
            'hentaitube', 'hentaivideos', 'hentaipics', 'hentaicomics',
            'hentaimanga', 'hentaidoujin', 'hentaigames', 'hentai3d', 'hentaivr',
            
            // Fetish and BDSM sites
            'kink', 'fetlife', 'bdsmlr', 'collarme', 'altscene', 'fetster',
            'bdsmsingles', 'kinkd', 'whiplr', 'kinkyads', 'fetishcom',
            'bdsmcom', 'kinkcom', 'fetishnetwork', 'bdsmnetwork', 'kinknetwork',
            
            // Gay and lesbian sites
            'grindr', 'scruff', 'jackd', 'hornet', 'manhunt', 'adam4adam',
            'gaydar', 'gaycupid', 'gayromeo', 'gaycom', 'gayporn', 'gaysex'
        ];
        
        // Suspicious TLDs often used by adult sites - EXPANDED
        this.suspiciousTlds = [
            '.xxx', '.sex', '.porn', '.adult', '.sexy', '.nude', '.cam', '.live',
            '.hot', '.fuck', '.suck', '.cock', '.pussy', '.tits', '.ass', '.boobs',
            '.milf', '.teen', '.mature', '.anal', '.oral', '.bdsm', '.fetish'
        ];
        
        // Weight system for scoring - MORE AGGRESSIVE
        this.weights = {
            domain: 100,        // Direct domain match
            tld: 90,           // Suspicious TLD (increased)
            keyword: 15,       // Per keyword match (increased)
            multipleKeywords: 8 // Bonus for multiple keywords (increased)
        };
        
        this.threshold = 5; // ULTRA SENSITIVE - catch everything
    }
    
    /**
     * Main detection function
     * @param {string} url - The URL to analyze
     * @param {string} title - Optional page title
     * @param {string} description - Optional page description
     * @returns {Object} Detection result with score and details
     */
    detectAdultContent(url, title = '', description = '') {
        const result = {
            isAdult: false,
            score: 0,
            confidence: 'low',
            reasons: [],
            keywords: [],
            domain: null
        };
        
        const normalizedUrl = url.toLowerCase();
        const combinedText = `${url} ${title} ${description}`.toLowerCase();
        
        // Check for known adult domains
        const domainMatch = this.checkDomain(normalizedUrl);
        if (domainMatch) {
            result.score += this.weights.domain;
            result.reasons.push(`Known adult domain: ${domainMatch}`);
            result.domain = domainMatch;
        }
        
        // Check for suspicious TLDs
        const tldMatch = this.checkTLD(normalizedUrl);
        if (tldMatch) {
            result.score += this.weights.tld;
            result.reasons.push(`Suspicious TLD: ${tldMatch}`);
        }
        
        // Check for adult keywords
        const keywordMatches = this.checkKeywords(combinedText);
        if (keywordMatches.length > 0) {
            result.score += keywordMatches.length * this.weights.keyword;
            result.keywords = keywordMatches;
            result.reasons.push(`Found ${keywordMatches.length} adult keywords`);
            
            // Bonus for multiple keywords
            if (keywordMatches.length > 3) {
                result.score += this.weights.multipleKeywords * (keywordMatches.length - 3);
                result.reasons.push('Multiple adult keywords detected');
            }
        }
        
        // Determine if content is adult based on score
        result.isAdult = result.score >= this.threshold;
        
        // Set confidence level
        if (result.score >= 100) {
            result.confidence = 'very high';
        } else if (result.score >= 80) {
            result.confidence = 'high';
        } else if (result.score >= 50) {
            result.confidence = 'medium';
        } else if (result.score >= 20) {
            result.confidence = 'low';
        } else {
            result.confidence = 'very low';
        }
        
        return result;
    }
    
    /**
     * Check if URL contains known adult domains
     */
    checkDomain(url) {
        for (const domain of this.adultDomains) {
            if (url.includes(domain)) {
                return domain;
            }
        }
        return null;
    }
    
    /**
     * Check for suspicious TLDs
     */
    checkTLD(url) {
        for (const tld of this.suspiciousTlds) {
            if (url.includes(tld)) {
                return tld;
            }
        }
        return null;
    }
    
    /**
     * Check for adult keywords in text
     */
    checkKeywords(text) {
        const matches = [];
        const normalizedText = text.toLowerCase();
        
        for (const keyword of this.adultKeywords) {
            const normalizedKeyword = keyword.toLowerCase();
            
            // Check for exact word matches and partial matches
            if (normalizedText.includes(normalizedKeyword)) {
                // Additional check for word boundaries to avoid false positives
                const regex = new RegExp('\\b' + normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
                if (regex.test(normalizedText) || normalizedText.includes(normalizedKeyword)) {
                    matches.push(keyword);
                }
            }
        }
        return matches;
    }
    
    /**
     * Quick check function for simple true/false result
     */
    isAdultContent(url, title = '', description = '') {
        return this.detectAdultContent(url, title, description).isAdult;
    }
    
    /**
     * Get adult content probability as percentage
     */
    getAdultProbability(url, title = '', description = '') {
        const result = this.detectAdultContent(url, title, description);
        return Math.min(100, (result.score / 200) * 100); // Cap at 100%
    }
    
    /**
     * Add custom keywords to the detection system
     */
    addCustomKeywords(keywords) {
        if (Array.isArray(keywords)) {
            this.adultKeywords.push(...keywords.map(k => k.toLowerCase()));
        } else {
            this.adultKeywords.push(keywords.toLowerCase());
        }
    }
    
    /**
     * Add custom domains to the detection system
     */
    addCustomDomains(domains) {
        if (Array.isArray(domains)) {
            this.adultDomains.push(...domains.map(d => d.toLowerCase()));
        } else {
            this.adultDomains.push(domains.toLowerCase());
        }
    }
    
    /**
     * Set custom threshold for adult content detection
     */
    setThreshold(threshold) {
        this.threshold = threshold;
    }
    
    /**
     * Process dump sites from newline-separated string
     * @param {string} dumpString - Newline-separated list of words
     * @returns {Array} Array of processed words
     */
    processDumpSites(dumpString) {
        return dumpString
            .split('\n')
            .map(word => word.trim())
            .filter(word => word.length > 0)
            .map(word => word.toLowerCase());
    }

    /**
     * Load keywords from the adult_content_keywords.txt file
     */
    loadKeywordsFromList() {
        // MASSIVE COMPREHENSIVE ADULT CONTENT KEYWORD LIST
        return [
            // Core explicit terms
            'porn', 'porno', 'pornography', 'xxx', 'x-rated', 'adult', 'sex', 'sexual', 'erotic',
            'nude', 'nudes', 'nudity', 'naked', 'sexy', 'hot', 'nsfw', 'explicit',
            
            // Fap and masturbation terms
            'fap', 'fapping', 'fapper', 'masturbate', 'masturbation', 'jerk', 'jerking',
            'jerkoff', 'wank', 'wanking', 'stroke', 'stroking', 'rub', 'rubbing',
            'touch', 'touching', 'play', 'playing', 'pleasure', 'self-pleasure',
            
            // Body parts - comprehensive
            'boob', 'boobs', 'breast', 'breasts', 'tit', 'tits', 'titty', 'titties',
            'nipple', 'nipples', 'areola', 'cleavage', 'chest', 'bust', 'rack',
            'ass', 'arse', 'butt', 'buttocks', 'bum', 'bottom', 'rear', 'behind',
            'pussy', 'vagina', 'cunt', 'twat', 'slit', 'hole', 'lips', 'clit',
            'penis', 'dick', 'cock', 'prick', 'shaft', 'member', 'rod', 'tool',
            'balls', 'testicles', 'nuts', 'sack', 'scrotum', 'package', 'junk',
            
            // Sexual acts - extensive
            'fuck', 'fucking', 'fucked', 'fucker', 'fucks', 'screw', 'screwing',
            'bang', 'banging', 'pound', 'pounding', 'slam', 'slamming',
            'suck', 'sucking', 'lick', 'licking', 'eat', 'eating', 'taste', 'tasting',
            'ride', 'riding', 'mount', 'mounting', 'penetrate', 'penetration',
            'thrust', 'thrusting', 'pump', 'pumping', 'drill', 'drilling',
            
            // Orgasm and climax terms
            'cum', 'cumming', 'come', 'coming', 'orgasm', 'climax', 'release',
            'ejaculate', 'ejaculation', 'squirt', 'squirting', 'gush', 'gushing',
            'finish', 'finishing', 'peak', 'peaking', 'explode', 'exploding',
            
            // Adult categories
            'milf', 'gilf', 'cougar', 'mature', 'teen', 'young', 'old', 'aged',
            'bbw', 'ssbbw', 'chubby', 'fat', 'thick', 'curvy', 'slim', 'skinny',
            'petite', 'tiny', 'small', 'big', 'huge', 'massive', 'giant',
            
            // Fetishes and kinks - massive list
            'bdsm', 'bondage', 'domination', 'submission', 'dom', 'sub', 'slave',
            'master', 'mistress', 'fetish', 'kink', 'kinky', 'pervert', 'perverted',
            'roleplay', 'cosplay', 'uniform', 'schoolgirl', 'nurse', 'maid',
            'lingerie', 'underwear', 'panties', 'bra', 'stockings', 'pantyhose',
            'leather', 'latex', 'rubber', 'vinyl', 'silk', 'satin', 'lace',
            
            // Sexual positions and acts
            'blowjob', 'bj', 'oral', 'handjob', 'hj', 'footjob', 'titjob',
            'rimjob', 'anal', 'dp', 'threesome', 'foursome', 'gangbang', 'orgy',
            'swinger', 'swinging', 'group', 'party', 'bukakke', 'creampie',
            
            // Cam and live content
            'cam', 'cams', 'camgirl', 'camboy', 'camshow', 'webcam', 'live',
            'stream', 'streaming', 'broadcast', 'show', 'performance', 'strip',
            'stripper', 'stripping', 'dance', 'dancing', 'tease', 'teasing',
            
            // Dating and hookup terms
            'hookup', 'hook-up', 'dating', 'meet', 'encounter', 'affair',
            'escort', 'prostitute', 'hooker', 'whore', 'slut', 'bitch',
            'sugardaddy', 'sugar-daddy', 'sugarbaby', 'sugar-baby',
            
            // Hentai and anime
            'hentai', 'ecchi', 'ahegao', 'oppai', 'waifu', 'senpai', 'loli', 'shota',
            'yaoi', 'yuri', 'doujin', 'drawn',
            
            // Emotional/physical states
            'horny', 'aroused', 'excited', 'turned-on', 'hard', 'erect', 'stiff',
            'wet', 'moist', 'dripping', 'soaked', 'tight', 'loose', 'stretched',
            
            // Slang and crude terms
            'bang', 'bone', 'nail', 'tap', 'hit', 'smash', 'destroy', 'wreck',
            'plow', 'rail', 'hammer', 'drill', 'stuff', 'fill', 'stretch',
            'gape', 'spread', 'open', 'wide', 'deep', 'rough', 'hard', 'fast',
            
            // Adult industry terms
            'pornstar', 'porn-star', 'model', 'actress', 'performer', 'talent',
            'studio', 'production', 'scene', 'shoot', 'casting', 'audition',
            
            // Technology and platforms
            'onlyfans', 'chaturbate', 'cam4', 'livejasmin', 'stripchat',
            'pornhub', 'xvideos', 'xhamster', 'redtube', 'youporn',
            
            // Additional explicit terms
            'naughty', 'dirty', 'filthy', 'nasty', 'wild', 'crazy', 'insane',
            'extreme', 'hardcore', 'softcore', 'amateur', 'professional',
            'homemade', 'private', 'personal', 'intimate', 'secret', 'hidden',
            
            // More body descriptors
            'smooth', 'hairy', 'shaved', 'trimmed', 'natural', 'enhanced',
            'fake', 'real', 'natural', 'silicone', 'implants', 'surgery',
            
            // Action descriptors
            'slow', 'gentle', 'tender', 'soft', 'light', 'heavy', 'intense',
            'passionate', 'romantic', 'sensual', 'erotic', 'lustful', 'desire',
            
            // Common misspellings and variations
            'pr0n', 'p0rn', 'sexxx', 'sexx', 'fucc', 'fuk', 'phuck',
            'azz', 'bewbs', 'bewbz', 'pr1ck', 'd1ck', 'c0ck', 'pu55y',
            
            // ========================================
            // DUMP SITES - ADD YOUR WORDS HERE
            // ========================================
            // Just paste your newline-separated list below and it will be automatically processed!
            // No commas needed - one word per line in the string below:
            
            ...this.processDumpSites(`
fap
fapping
fapper
boob
boobs
tit
tits
ass
pussy
cock
dick
fuck
sex
porn
nude
hot
sexy
naughty
dirty
filthy
kinky
horny
wet
tight
hard
soft
rough
gentle
wild
crazy
insane
extreme
intense
passionate
romantic
sensual
erotic
lustful
desire
love
hate
anger
rage
fury
wrath
vengeance
revenge
retribution
payback
retaliation
reprisal
response
reaction
reply
answer
solution
resolution
conclusion
end
finish
stop
halt
pause
break
rest
relax
calm
peace
quiet
silence
still
motionless
stationary
fixed
stable
steady
constant
continuous
perpetual
eternal
forever
always
endless
infinite
limitless
boundless
unlimited
unrestricted
unconfined
unbound
free
liberated
independent
autonomous
self
ruled
governed
controlled
commanded
authorized
powered
forced
strengthened
mightened
muscled
brawned
beefed
meated
fleshed
bodied
physiqued
framed
built
structured
formed
shaped
figured
silhouetted
outlined
contoured
profiled
aspected
appeared
looked
viewed
sighted
visioned
imaged
pictured
photoed
photographed
shot
snapped
snapshot
portraited
likened
represented
depicted
illustrated
drawn
sketched
painted
artworked
artted
created
worked
pieced
masterpiece
chef
doeuvre
opus
composed
produced
output
resulted
outcomed
consequenced
effected
impacted
influenced
porn
porno
pornography
xxx
xxx-rated
x-rated
adult
sex
sexual
erotic
nude
nudes
nudity
naked
sexy
hot
nsfw
explicit
fap
fapping
fapper
masturbate
masturbation
jerk
jerking
jerkoff
wank
wanking
stroke
stroking
rub
rubbing
touch
touching
play
playing
pleasure
self-pleasure
milf
gilf
teen
bbw
ssbbw
cougar
matured
mature
young
old
big
huge
tiny
petite
thick
curvy
slim
chubby
fat
skinny
hentai
ecchi
ahegao
oppai
waifu
senpai
loli
shota
yaoi
yuri
doujin
manga
anime
cartoon
drawn
boob
boobs
breast
breasts
tit
tits
titty
titties
nipple
nipples
areola
cleavage
chest
bust
rack
ass
arse
butt
buttocks
bum
bottom
rear
behind
pussy
vagina
cunt
twat
slit
hole
lips
clit
penis
dick
cock
prick
shaft
member
rod
tool
balls
testicles
nuts
sack
scrotum
package
junk
fuck
fucking
fucked
fucker
fucks
screw
screwing
bang
banging
pound
pounding
slam
slamming
suck
sucking
lick
licking
eat
eating
taste
tasting
ride
riding
mount
mounting
penetrate
penetration
thrust
thrusting
pump
pumping
drill
drilling
cum
cumming
come
coming
orgasm
climax
release
ejaculate
ejaculation
squirt
squirting
gush
gushing
finish
finishing
peak
peaking
explode
exploding
bdsm
bondage
domination
submission
dom
sub
slave
master
mistress
fetish
kink
kinky
pervert
perverted
roleplay
cosplay
uniform
schoolgirl
nurse
maid
lingerie
underwear
panties
bra
stockings
pantyhose
leather
latex
rubber
vinyl
silk
satin
lace
blowjob
bj
oral
handjob
hj
footjob
titjob
rimjob
anal
dp
threesome
foursome
gangbang
orgy
swinger
swinging
group
party
bukakke
creampie
cam
cams
camgirl
camboy
camshow
webcam
live
stream
streaming
broadcast
show
performance
strip
stripper
stripping
dance
dancing
tease
teasing
hookup
hook-up
dating
meet
encounter
affair
escort
prostitute
hooker
whore
slut
bitch
sugardaddy
sugar-daddy
sugarbaby
sugar-baby
call girl
massage
happy ending
horny
aroused
excited
turned-on
hard
erect
stiff
wet
moist
dripping
soaked
tight
loose
stretched
red
redlight
red light
red-light
hot
steamy
sexy
wild
naughty
dirty
filthy
kinky
rough
gentle
soft
hard
intense
passionate
romantic
sensual
lustful
desire
live
cam
chat
show
perform
performance
private
exclusive
premium
vip
member
membership
subscribe
subscription
feet
foot
toes
armpits
hair
shaved
unshaved
waxed
trimmed
smooth
hairy
natural
enhanced
fake
real
silicone
implants
surgery
vibrator
dildo
butt plug
cock ring
fleshlight
sex toy
sex toys
adult toy
adult toys
banging
boning
doing
humping
jumping
knocking
nailing
plowing
ramming
slamming
tapping
wrecking
bone
nail
tap
hit
smash
destroy
wreck
plow
rail
hammer
stuff
fill
stretch
gape
spread
open
wide
deep
booty
rack
jugs
melons
hooters
knockkers
buns
cheeks
package
junk
tool
rod
stick
shaft
studio
production
producer
director
performer
actor
actress
star
starlet
model
modeling
pornstar
porn-star
talent
scene
shoot
casting
audition
webcam
cam2cam
c2c
pvt
private show
group show
spy
voyeur
exhibitionist
kinky
freaky
wild
crazy
insane
extreme
intense
rough
hard
soft
gentle
slow
fast
quick
long
short
big
small
huge
tiny
massive
enormous
hardcore
softcore
amateur
professional
homemade
private
personal
intimate
secret
hidden
interracial
lesbian
gay
bisexual
transgender
trans
shemale
ladyboy
crossdresser
sissy
femdom
maledom
cuckold
hotwife
wife sharing
squirt
squirting
cream
creaming
drip
dripping
flow
flowing
pulse
pulsing
throb
throbbing
quiver
quivering
shake
shaking
tremble
trembling
onlyfans
chaturbate
cam4
livejasmin
stripchat
xhamster
xvideos
pornhub
redtube
youporn
xtube
beeg
tube8
spankwire
fapdu
xnxx
tnaflix
empflix
mofosex
drtuber
vporn
ah-me
fuq
wetplace
slutload
madthumbs
gotporn
freeones
data18
iafd
boobpedia
freeadultcomix
hentaifoundry
rule34
e621
gelbooru
danbooru
sankaku
pixiv
deviantart
nhentai
tsumino
exhentai
sadpanda
fakku
hanime
hentaihaven
9hentai
multporn
zone
flash
spankbang
eporner
porndig
pornhat
pornone
pornsos
pornktube
pornerbros
porndoe
pornoxo
pornhits
pornzog
pornwhite
pornpics
pornpro
pornmax
pornmd
thumbzilla
nuvid
sunporno
analdin
upornia
txxx
hdzog
porntrex
zbporn
porngo
vjav
javhd
javmost
javfree
javbank
javdoe
javguru
imagefap
xhamsterlive
ok
pornhd
hdporn
4tube
xtits
freeporntube
porntube
sextube
fucktube
cumtube
sluttube
whoretube
bitchtube
nastytube
dirtytube
filthytube
kinkytube
fetishtube
bdsmtube
analtubes
oraltube
vaginaltube
blowjobtube
handjobtube
footjobtube
titjobtube
rimjobtube
deepthroattube
facefucktube
throatfucktube
facialtube
creampietube
cumshotube
bukakketube
gangbangtube
traintube
orgytube
threesometube
foursometube
fivesometube
sixsometube
sevensometube
eightsometube
ninesometube
tensometube
grouptube
partytube
swingertube
swingingtube
swaptube
swappingtube
exchangetube
exchangingtube
sharetube
sharingtube
tradetube
tradingtube
camster
camcontacts
jerkmate
slutroullette
cams
livesex
sexcam
webcam
camgirl
camboy
camshow
camwhores
camsex
camslut
camfuze
camversity
camplace
camrabbit
camwithher
camwithcarmen
camgasm
camcrush
camfrog
camzap
camsurf
camroulette
camster
camplace
camrabbit
camwithher
camwithcarmen
camgasm
camcrush
camfrog
camzap
camsurf
camroulette
camwhores
camsex
camslut
camfuze
camversity
camplace
camrabbit
camwithher
camwithcarmen
camgasm
camcrush
camfrog
camzap
camsurf
camroulette
camster
camplace
camrabbit
camwithher
camwithcarmen
camgasm
camcrush
camfrog
camzap
camsurf
camroulette
camwhores
camsex
camslut
camfuze
camversity
camplace
camrabbit
camwithher
camwithcarmen
camgasm
camcrush
camfrog
camzap
camsurf
camroulette
fuckbook
hookup
sexmeet
adultmeet
sexdating
naughtydate
wildmeet
sexhookup
adulthookup
fuckbuddies
sexfinder
adultfinder
booty
bootycall
quicksex
instantfuck
fastfuck
easysex
freesex
localsex
nearbysluts
slutfinder
fucklocals
sexlocals
naughtylocals
wildlocals
hotlocals
sexylocals
adultlocals
fucktonight
sextonight
naughtytonight
wildtonight
hottonight
sexytonight
adulttonight
fucknow
sexnow
naughtynow
wildnow
hotnow
sexynow
adultnow
fuckme
sexme
naughtyme
wildme
hotme
sexyme
adultme
fuckyou
sexyou
naughtyyou
wildyou
hotyou
sexyyou
adultyou
fuckher
sexher
naughtyher
wildher
hoter
sexyher
adulther
fuckhim
sexhim
naughtyhim
wildhim
hothim
sexyhim
adulthim
fuckthem
sexthem
naughtythem
wildthem
hotthem
sexythem
adultthem
fuckus
sexus
naughtyus
wildus
hotus
sexyus
adultus
twistys
babes
mofos
teamskeet
familystrokes
daughterswap
sislovesme
mybabysittersclub
stepsiblings
stepsisters
stepbrothers
stepmom
stepdad
stepdaughter
stepson
familytherapy
familysinners
familyhookups
familylust
familysex
familyfuck
familyorgy
familyswap
familystrokes
familytherapy
familysinners
familyhookups
familylust
familysex
familyfuck
familyorgy
familyswap
familystrokes
familytherapy
familysinners
familyhookups
familylust
familysex
familyfuck
familyorgy
familyswap
familystrokes
familytherapy
familysinners
familyhookups
familylust
familysex
familyfuck
familyorgy
familyswap
hentai2read
hentaimama
hentaistream
hentaigasm
hentaikey
hentaicloud
hentaiworld
animeporn
cartoonporn
hentaitube
hentaivideos
hentaipics
hentaicomics
hentaimanga
hentaidoujin
hentaiballs
hentaitesticles
hentainuts
hentaisack
hentaiscrotum
hentaipackage
hentaijunk
hentaitool
hentairod
hentaistick
hentaishaft
hentaimember
hentaimanhood
hentaischlong
hentaiwang
hentaiwiener
hentaipeepee
hentaiweewee
hentaiprivates
hentaigenitals
kink
fetlife
bdsmlr
collarme
altscene
fetster
bdsmsingles
kinkd
whiplr
kinkyads
fetishcom
bdsmcom
kinkcom
fetishnetwork
bdsmnetwork
kinknetwork
fetishporn
bdsmporn
kinkporn
fetishvideos
bdsmvideos
kinkvideos
fetishpics
bdsmpics
kinkpics
fetishchat
bdsmchat
kinkchat
fetishcam
bdsmcam
kinkcam
fetishsex
bdsmsex
kinksex
fetishfuck
bdsmfuck
kinkfuck
fetishorgasm
bdsmorgasm
kinkorgasm
fetishcum
bdsmcum
kinkcum
fetishass
bdsmass
kinkass
fetishtits
bdsmtits
kinktits
fetishpussy
bdsmpussy
kinkpussy
fetishcock
bdsmcock
kinkcock
fetishdick
bdsmdick
kinkdick
fetishboobs
bdsmboobs
kinkboobs
fetishnude
bdsmnude
kinknude
fetishnaked
bdsmnaked
kinknaked
fetishsexy
bdsmsexy
kinksexy
fetishhot
bdsmhot
kinkhot
fetishwild
bdsmwild
kinkwild
fetishnaughty
bdsmnaughty
kinknaughty
fetishdirty
bdsmdirty
kinkdirty
fetishfilthy
bdsmfilthy
kinkfilthy
fetishnasty
bdsmnasty
kinknasty
fetishkinky
bdsmkinky
kinkkinky
fetishpervert
bdsmpervert
kinkpervert
fetishslut
bdsmslut
kinkslut
fetishwhore
bdsmwhore
kinkwhore
fetishbitch
bdsmbitch
kinkbitch
grindr
scruff
jackd
hornet
planet romeo
manhunt
adam4adam
gaydar
gaycupid
gayromeo
gaycom
gayporn
gaysex
gayfuck
gayass
gaycock
gaydick
gayboobs
gaytits
gaypussy
gaynude
gaynaked
gaysexy
gayhot
gaywild
gaynaughty
gaydirty
gayfilthy
gaynasty
gaykinky
gaypervert
gayslut
gaywhore
gaybitch
gaycunt
gaytwat
gayslit
gayhole
gaylips
gayclit
gayvagina
gaypenis
gayballs
gaytesticles
gaynuts
gaysack
gayscrotum
gaypackage
gayjunk
gaytool
gayrod
gaystick
gayshaft
gaymember
gaymanhood
gayschlong
gaywang
gaywiener
gaypeepee
gayweewee
gayprivates
gaygenitals
lesbian
lesbians
lesbiansex
lesbianfuck
lesbianass
lesbiancunt
lesbiandick
lesbianboobs
lesbiantits
lesbiannude
lesbiannaked
lesbiansexy
lesbianhot
lesbianwild
lesbiannaughty
lesbiandirty
lesbianfilthy
lesbiannasty
lesbiankinky
lesbianpervert
lesbianslut
lesbianwhore
lesbianbitch
lesbiancunt
lesbiantwat
lesbianslit
lesbianhole
lesbianlips
lesbianclit
lesbiavagina
lesbiapenis
lesbiaballs
lesbiatesticles
lesbianuts
lesbiasack
lesbiascrotum
lesbiapackage
lesbiajunk
lesbiatool
lesbiarod
lesbiastick
lesbiashaft
lesbiamember
lesbiamanhood
lesbiaschlong
lesbiawang
lesbiawiener
lesbiapeepee
lesbiaweewee
lesbiaprivates
lesbiagenitals
fuckface
fuckhole
fuckslut
fuckwhore
fuckbitch
fucktoy
fuckdoll
fuckmeat
fuckpig
fuckcow
fuckdog
fuckpet
fuckslave
fuckmaster
fuckmistress
fuckdom
fucksub
fuckbdsm
fuckkink
fuckfetish
fuckpain
fuckpleasure
fucktorture
fuckabuse
fuckviolence
fuckrough
fuckhard
fuckfast
fuckslow
fuckgentle
fucktender
fucksoft
fucklight
fuckheavy
fuckintense
fuckpassionate
fuckromantic
fucksensual
fuckerotic
fucklustful
fuckdesire
fucklove
fuckhate
fuckanger
fuckrage
fuckfury
fuckwrath
fuckvengeance
fuckrevenge
fuckretribution
fuckpayback
fuckretaliation
fuckreprisal
fuckresponse
fuckreaction
fuckreply
fuckanswer
fucksolution
fuckresolution
fuckconclusion
fuckend
fuckfinish
fuckstop
fuckhalt
fuckpause
fuckbreak
fuckrest
fuckrelax
fuckcalm
fuckpeace
fuckquiet
fucksilence
fuckstill
fuckmotionless
fuckstationary
fuckfixed
fuckstable
fucksteady
fuckconstant
fuckcontinuous
fuckperpetual
fucketernal
fuckforever
fuckalways
fuckendless
fuckinfinite
fucklimitless
fuckboundless
fuckunlimited
fuckunrestricted
fuckunconfined
fuckunbound
fuckfree
fuckliberated
fuckindependent
fuckautonomous
fuckself
fuckruled
fuckgoverned
fuckcontrolled
fuckcommanded
fuckauthorized
fuckpowered
fuckforced
fuckstrengthened
fuckmightened
fuckmuscled
fuckbrawned
fuckbeefed
fuckmeated
fuckfleshed
fuckbodied
fuckphysiqued
fuckframed
fuckbuilt
fuckstructured
fuckformed
fuckshaped
fuckfigured
fucksilhouetted
fuckoutlined
fuckcontoured
fuckprofiled
fuckaspected
fuckappeared
fucklooked
fuckviewed
fucksighted
fuckvisioned
fuckimaged
fuckpictured
fuckphotoed
fuckphotographed
fuckshot
fucksnapped
fucksnapshot
fuckportraited
fucklikened
fuckrepresented
fuckdepicted
fuckillustrated
fuckdrawn
fucksketched
fuckpainted
fuckartworked
fuckartted
fuckcreated
fuckworked
fuckpieced
fuckmasterpiece
fuckchef
fuckdoeuvre
fuckopus
fuckcomposed
fuckproduced
fuckoutput
fuckresulted
fuckoutcomed
fuckconsequenced
fuckeffected
fuckimpacted
fuckinfluenced
fuckpowered
fuckforced
fuckstrengthened
fuckmightened
fuckmuscled
fuckbrawned
fuckbeefed
fuckmeated
fuckfleshed
fuckbodied
fuckphysiqued
fuckframed
fuckbuilt
fuckstructured
fuckformed
fuckshaped
fuckfigured
fucksilhouetted
fuckoutlined
fuckcontoured
fuckprofiled
fuckaspected
fuckappeared
fucklooked
fuckviewed
fucksighted
fuckvisioned
fuckimaged
fuckpictured
fuckphotoed
fuckphotographed
fuckshot
fucksnapped
fucksnapshot
fuckportraited
fucklikened
fuckrepresented
fuckdepicted
fuckillustrated
fuckdrawn
fucksketched
fuckpainted
fuckartworked
fuckartted
fuckcreated
fuckworked
fuckpieced
fuckmasterpiece
fuckchef
fuckdoeuvre
fuckopus
fuckcomposed
fuckproduced
fuckoutput
fuckresulted
fuckoutcomed
fuckconsequenced
fuckeffected
fuckimpacted
fuckinfluenced
            `),
            
            // ========================================
            // END DUMP SITES SECTION
            // ========================================
            
            // Colors/Descriptors
            'red', 'redlight', 'red light', 'red-light', 'hot', 'steamy', 'sexy',
            'wild', 'naughty', 'dirty', 'filthy', 'kinky', 'rough', 'gentle', 'soft', 'hard',
            
            // Common Adult Site Words
            'live', 'cam', 'chat', 'show', 'perform', 'performance', 'private',
            'exclusive', 'premium', 'vip', 'member', 'membership', 'subscribe',
            'subscription', 'free', 'trial', 'preview', 'sample', 'demo',
            
            // Relationship Terms
            'dating', 'hookup', 'booty call', 'one night stand', 'casual', 'no strings',
            'fwb', 'friends with benefits', 'affair',
            
            // Age Verification
            '18+', '21+', 'adult only', 'age verification', 'verify age',
            
            // Additional explicit terms
            'naked', 'bare', 'exposed', 'uncensored', 'explicit', 'graphic',
            'hardcore', 'softcore', 'amateur', 'professional', 'model', 'models',
            'video', 'videos', 'pic', 'pics', 'photo', 'photos', 'image', 'images',
            'gallery', 'galleries', 'tube', 'tubes', 'clip', 'clips',
            'cams', 'shows', 'join', 'signup', 'meet', 'singles', 'hookups', 'affairs',
            
            // More explicit content
            'spank', 'spanking', 'whip', 'whipping', 'slap', 'slapping',
            'choke', 'choking', 'gag', 'gagging', 'deepthroat', 'deep throat',
            'anal', 'oral', 'vaginal', 'latex', 'leather', 'rubber', 'vinyl', 'pvc',
            'feet', 'foot', 'toes', 'armpits', 'shaved', 'unshaved', 'waxed', 'trimmed',
            
            // Adult toys and more
            'vibrator', 'dildo', 'butt plug', 'cock ring', 'fleshlight',
            'sex toy', 'sex toys', 'adult toy', 'adult toys', 'boning', 'humping',
            'nailing', 'plowing', 'ramming', 'slamming', 'tapping', 'wrecking',
            'booty', 'rack', 'jugs', 'melons', 'hooters', 'knockers', 'buns',
            'cheeks', 'package', 'junk', 'tool', 'rod', 'stick', 'shaft',
            'cam2cam', 'c2c', 'pvt', 'group show', 'spy', 'voyeur', 'exhibitionist',
            'interracial', 'lesbian', 'gay', 'bisexual', 'transgender', 'trans',
            'shemale', 'ladyboy', 'crossdresser', 'sissy', 'femdom', 'maledom',
            'cuckold', 'hotwife', 'wife sharing', 'squirt', 'squirting', 'cream',
            'creaming', 'drip', 'dripping', 'pulse', 'pulsing', 'throb', 'throbbing',
            'quiver', 'quivering', 'shake', 'shaking', 'tremble', 'trembling'
        ];
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdultContentDetector;
}

// Example usage:
/*
const detector = new AdultContentDetector();

// Simple check
const isAdult = detector.isAdultContent('https://example-adult-site.com');
console.log('Is adult content:', isAdult);

// Detailed analysis
const result = detector.detectAdultContent(
    'https://some-site.com/hot-videos',
    'Hot Videos - Adult Entertainment',
    'Watch the hottest adult videos online'
);
console.log('Detection result:', result);

// Get probability
const probability = detector.getAdultProbability('https://suspicious-site.xxx');
console.log('Adult content probability:', probability + '%');
*/