document.addEventListener('DOMContentLoaded', () => {
    // Function to handle message generation for Sexting B section
    document.getElementById('sexting-b-button').addEventListener('click', () => {
        const name = document.getElementById('fan-name-sexting-b').value;
        if (name.trim() === "") {
            alert("Please enter a name.");
            return;
        }

        // Array of messages
        const messages = [
            `After you push it in deep and you can see me coughing and trying to breathe, take it out and rub your spit, precum-covered cock all over my slutty face!! Slap me with it and ask me who's a good girl. I'll look you in the eyes deep, my makeup ruined and scream I am daddy, I'm your cumhungry good girl 😍😍😍 Then as a reward you spit in my mouth and shove it back in my throat balls deep again and hold it there for a few seconds, stopping me from breathing. Then once you see me struggle start fucking my face so hard and fast it starts to hurt`,
            `I would just get on my knees in front of you, unzip your pants and take it out, licking the sides and then getting to your balls and suck and lick them gently🥰 Then getting my way up to the tip, licking and kissing it😍 I will put it slowly inside my mouth and with one hand I'll jerk you and with other hand I'll massage your balls😈`,
            `As I slowly take you into my mouth 😈, I love the way your body tenses and shivers with each touch. I’ll wrap my lips around you gently, then take you deeper, teasing you with every stroke 💋. Your moans and gasps drive me wild, and I’m here to make sure you experience the ultimate pleasure 🔥`,
			`The moment I get on my knees and look up at you, knowing I'm about to pleasure you with my mouth 😈😈😈🥵🥵🥵, is the highlight of my day. I’ll start with soft, lingering kisses, then take you in slowly, using my tongue to explore every inch and make you lose control 💦🥵🥵🥵🥵🥵`,
			`Imagine my lips wrapped tightly around your throbbing cock 😈😈😈🥵🥵🥵, feeling the heat and hardness of you in my mouth 🥵. I’ll slowly stroke your dick with my tongue 😈😈, savoring every reaction you have, making sure to give you a blowjob that will leave you breathless and begging for more 😈`,
			`Every time I give you a blowjob, it’s like an erotic dance 😈😈😈🥵. I’ll tease you with light flicks of my tongue, gradually taking your hard cock deep in my throat, feeling you swell and harden in my mouth 🥵🥵🥵🥵. The way you moan and tremble is the ultimate reward for me my love 🥵🥵`,
			`I love the way you react when I start giving you a very sloppy blowjob 😈😏. I’ll take your hard cock deep in my mouth, teasing you with gentle suction and slow strokes 😏🥵🥵, using my tongue to explore every sensitive spot of your throbbing cock. Watching you lose control is incredibly satisfying for me daddy 🥵🥵🔥`,
			`The way I can make you shiver with pleasure by just using my mouth and tongue 😈 is one of the most thrilling experiences. I’ll start with soft, teasing kisses, then gradually take you deeper, feeling you grow harder and hotter in my mouth baby 😏🥵💦`,
			`Picture me slowly sliding your hard throbbing cock into my mouth 😈🥵, feeling the warmth of you as I wrap my lips around you 😈🥵. I’ll use my tongue to tease and pleasure you, alternating between gentle strokes and more intense licks, making sure every moment is filled with ecstasy and saliva all over your cock 🥵🥵🥵🥵`,
			`The sensation of having your hard cock in my mouth, feeling you grow harder and hotter with each stroke 😈, is absolutely awesome fuckkkk 😈🥵. I’ll use my lips and tongue to explore every inch, making sure to tease and pleasure you until you’re on the edge of ecstasy 😈🥵💦`,
			`Imagine me kneeling before you, my lips softly caressing the head of your cock 😈😘. I’ll slowly take you in, teasing you with gentle licks and sucking, feeling you swell and pulse in my mouth. Each moan you make drives me to give you more intense pleasure 💋`,
            `I will give you a very sloppy blowjob and let the saliva slide over your balls and then go down with my tongue and start licking them off, sucking gently to not hurt you, maybe a bit😈😈 and keep jerking your cock until you're about to cum and I just get back up and take it deep in my throat and look into your eyes while I keep jerking you with one hand and with the other I massage your soft and big balls🥵🥵`,
			`I can't wait to get you in my mouth 😈. I'll take you in slowly, feeling every inch of your hard cock with my lips and tongue 😘. I’ll tease you relentlessly, making you moan and gasp for more as I work you over with every stroke 💋🔥.`,
            `Just thinking about wrapping my lips around your thick shaft and taking you deep into my mouth makes me so wet 😏. I’ll suck you off slowly, using my tongue to lick and tease every inch until you're begging for release 💦💋.`,
            `Imagine me on my knees, eagerly taking your cock in my mouth 😈. I’ll wrap my lips around you and start sucking you off, teasing you with every stroke and making sure you feel every inch of pleasure 💋🔥. Your moans drive me wild.`,
            `I love feeling your cock grow harder and hotter as I suck you off 😍. I’ll take you in deep, using my tongue to swirl and lick, making you lose control and explode with pleasure. Your reactions are pure ecstasy to me 💦😈.`,
            `The thought of having your cock in my mouth, feeling you throb and twitch as I suck you off, gets me so excited 😘. I’ll use my lips and tongue to make you shiver with pleasure, each stroke bringing you closer to the edge 🔥💋.`,
            `I can’t wait to have your cock in my mouth, feeling you grow harder with every lick 😏. I’ll take you in slowly, teasing you with my tongue and lips, making sure you feel every bit of pleasure as you explode in my mouth 💦🔥.`,
            `When I’m giving you a blowjob, I love the way your cock feels in my mouth 😈. I’ll take you in deep, feeling you pulse and throb as I suck and lick you, making you moan and shiver with every touch 💋💦.`,
			`I would just get on my knees in front of you, unzip your pants and take it out, licking the sides and then getting to your balls and suck and lick them gently🥰 Then getting my way up to the tip, licking and kissing it😍 I will put it slowly inside my mouth and with one hand I'll jerk you and with other hand I'll massage your balls😈`,
            `I’m dying to get my lips wrapped around your hard cock and suck you off 😘. I’ll start slowly, teasing you with soft kisses and then take you deeper, using my tongue to make you lose control and scream with pleasure 🔥💋.`,
            `The way you react when I take your cock in my mouth and suck you off is incredible 😈. I’ll use my lips and tongue to drive you wild, making sure you feel every bit of pleasure as you explode in my mouth 💦💋.`,
            `Picture me on my knees, eagerly taking your cock in my mouth and sucking you off 😏. I’ll use my tongue to explore every inch of you, teasing you until you're moaning and begging for release 💋🔥.`,
			`Imagine it's my devilish lips wrapped around it, taking it all deep into my throat while looking u in the eyes😈 But I won't be gentle, I'll gag on ch0ke on ur cock until spit drips out of my mouth and my face is painted with cum and saliva🤤🤤🤤`,
            `I love the way you shiver and moan when I’m giving you a blowjob 😘. I’ll take you in my mouth slowly, using my lips and tongue to drive you wild, making sure every stroke brings you closer to the edge 💦😈.`,
            `I can’t wait to wrap my lips around your thick cock and suck you off 😍. I’ll take you deep into my mouth, teasing you with every lick and stroke, making you lose control and explode with pleasure 💋🔥.`,
            `The thought of having your cock in my mouth, feeling you throb and twitch as I suck and lick you, makes me so wet 😈. I’ll use my tongue to explore every inch, making sure you feel every bit of pleasure as you moan and gasp 💦💋.`,
            `Imagine me taking you in my mouth, feeling you grow harder and hotter with every stroke 😏. I’ll wrap my lips around you and suck you off, using my tongue to make you lose control and scream with pleasure 💋🔥.`,
            `When I’m giving you a blowjob, I love the way you react to every touch 😘. I’ll take you deep into my mouth, teasing you with gentle licks and sucking you off until you’re on the brink of climax 💦😈.`,
            `I’m so excited to have your cock in my mouth, making you moan and shiver with pleasure 😍. I’ll start with soft, teasing strokes, then take you deeper, using my tongue to drive you wild and make you lose control 🔥💋.`,
			`I will have it in my hand and the tip in my mouth and I will stop for a second, looking into your eyes, I will do puppy eyes and make you to want me more👀😊`,
			`I want you to push me on my back and get on top of me and put your cock between my boobs and fuck them hard, I will be with my tongue out trying to reach the tip of your cock but you grab my neck and tell me to not be a bad girl and to listen to daddy🥵🥵🥵`,
			`Let me tell u my biggest fantasy. I want u to tie me to a pole while standing on my feet, put a fuck machine under me with 2 dildos attached to double penetrate me. U control the fuck machine speeds while slapping me, spitting on me and talking dirty to me😈`,
            `The sensation of your cock in my mouth, feeling you throb and pulse as I suck and lick you, is incredible 😈. I’ll use every part of my mouth to pleasure you, making sure you feel every bit of ecstasy as you explode 💦💋.`,
            `I love wrapping my lips around your hard cock and taking you in deep 😘. I’ll use my tongue to tease and pleasure you, making you moan and shiver with every stroke. Your pleasure is my ultimate goal 💋🔥.`,
			`I can't wait to get on my knees and show you what a filthy cumslut I can be, daddy . Your cock will be my favorite treat, and I'll devour it like a hungry whore, sucking and slurping every last drop of your delicious cum🤤🤤🤤`,
            `Just the thought of having your cock in my mouth, feeling you grow hotter and harder with every stroke 😏, makes me so excited. I’ll use my lips and tongue to drive you wild, making sure every moment is filled with pleasure 💦🔥.`,
            `When I’m giving you a blowjob, I savor every moment of pleasure I can give you 😈. I’ll take you in my mouth, feeling you pulse and throb, using my tongue and lips to make you lose control and scream with pleasure 💋💦.`,
            `I can’t wait to pleasure you with my mouth, taking you deep and making you moan with every stroke 😘. I’ll wrap my lips around your cock and suck you off, using my tongue to explore every inch and make you lose control 🔥💋.`,
            `The way you react when I take you in my mouth and start sucking you off is incredible 😏. I’ll use my tongue and lips to tease and pleasure you, making sure you feel every bit of ecstasy as you explode in my mouth 💦💋.`,
            `Picture me eagerly taking your cock into my mouth, feeling it grow harder and hotter with every stroke 😈. I’ll wrap my lips around you and use my tongue to drive you wild, making you moan and shiver with pleasure 💋🔥.`,
            `I love the sensation of having your cock in my mouth, feeling you pulse and throb as I suck and lick you 😘. I’ll take you in deep, using my lips and tongue to make you lose control and explode with pleasure 💦🔥.`,
            `When I’m giving you a blowjob, I’m focused on making you feel incredible 😍. I’ll use my mouth and tongue to explore every inch of you, teasing and pleasuring you until you’re on the brink of climax 💋😈.`,
			`How about I wrap my huge boobs around your cock and massage it? I'll keep spitting on it too so it's well lubed up and I'll keep going until you're rock hard, throbbing and pulsating so fucking hard your cock's gonna feel like a vibrator in my tight little pussy 🥵🥵🥵 Put it between my boobs now and start fucking them, daddy PLEASE PLEASE PLEASE!!! I want you to fuck my boobs until your cock's ready to break my throat and tight little holes 💦💦💦💦💦`,
			`I will have it in my hand and the tip in my mouth and I will stop for a second, looking into your eyes, I will do puppy eyes and make you to want me more👀😊`,
			`🥵🥵 I'd love to know how you taste when you cum a bit for me when you touch the tip of my throat with your hard cock and glans! I want to feel how I blow your cock and you grab me from my hair, look at my eyes and ask me to jump over your cock! 😈😈😈`,
			`Yessss , 😍I want you to grab me by the cheeks🍑, pinch them and slap them and tell me I'm not sucking your cock deep enough🍆🫦💦😫 You know I'm your little bitch and I will blindly do anything you ask.🥵 You make me have no limits, my love🔞`,
            `I can’t wait to have your cock in my mouth, feeling it grow hotter and harder with every stroke 😏. I’ll use my lips and tongue to drive you wild, making sure you experience every bit of pleasure as you moan and shiver 💦🔥.`,
            `The thought of wrapping my lips around your hard cock and sucking you off makes me so excited 😘. I’ll start with slow, teasing strokes, then take you deeper, using my tongue to make you lose control and scream with pleasure 💋💦.`,
            `I’m so eager to pleasure you with my mouth, taking you in deep and making you moan with every touch 😈. I’ll use my lips and tongue to tease and pleasure you, ensuring every moment is filled with intense ecstasy 🔥💋.`, 
            `Just imagining your cock in my mouth, feeling you throb and pulse as I suck and lick you, gets me so wet 😍. I’ll take you in slowly, using my tongue and lips to drive you wild and make you explode with pleasure 💦🔥.`,
            `When I’m giving you a blowjob, I live for the way you react to my touch 😘. I’ll wrap my lips around you and suck you off, using my tongue to explore every inch and make sure you feel every bit of pleasure 💋💦.`
        ];

        // Choose a random message
        const message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('sexting-b-message').textContent = message;
    });

    // Function to handle copying text for Sexting B section
    document.getElementById('copy-sexting-b').addEventListener('click', () => {
        const message = document.getElementById('sexting-b-message').textContent;
        if (message.trim() === "") {
            alert("Nothing to copy.");
            return;
        }
        copyToClipboard(message);
    });

    // Function to handle message generation for Sexting P section
    document.getElementById('sexting-p-button').addEventListener('click', () => {
        const name = document.getElementById('fan-name-sexting-p').value;
        if (name.trim() === "") {
            alert("Please enter a name.");
            return;
        }

        // Array of messages
        const messages = [
            `I’m craving your cock deep inside my pussy, feeling every thrust as you make me moan with desire 😈🔥. Stretch me and make me come so hard, I can't think of anything else 💦🍑.`,
            `Just imagine you filling me up, your cock sliding into my wet pussy, making me scream with pleasure 😏💋. I want to feel you deep, throbbing inside me, pushing me to the edge 💦🔥.`,
            `I need your cock fucking my pussy hard and fast, making me squirm and moan with every stroke 😈🔥. Let’s make my pussy your personal playground and leave me begging for more 💦🍑.`,
            `Picture me dripping with excitement as you drive your cock deep into my pussy 😏💋. Each thrust makes me shiver with pleasure, craving every inch of you and feeling overwhelmed by desire 💦🔥.`,
            `I want to feel every inch of your cock stretching my pussy, making me gasp and moan with pleasure 😈🔥. Fill me up and make me come so hard, I forget my own name 💦🍑.`,
			`I want you to put me in a 69, me on the bottom and slurp on my pussy juices🤤💦💦 and finger fuck my little holes to make them wet sloppy and ready for your hard cock🍆🥵 All while you're thrusting your cock deep in my mouth🍆, fucking my throat like a pussy🥵😏😈`,
			`I'd also love to bounce and bounce on your cock😈😈 and then I'd lick your tip an slowly put it in my pussy. I'd like to go easy at first. But then I'd want you to fuck me haaaaard baby`,
			`My pussy is all yours, I cover your face and your mouth with my cum and squirt, I will do a mess and get the sheets wet, all because of your great skills, love🥵🥵 I just want it 24/7, until I have nothing left, come up and kiss me and suck my nipples then get back there and keep doing what you were doing, you're the best💋🤤`,
			`Omg ,yes , I want that to wrap my legs around your head and to squeeze then you touch in my favorite place and once you start to play with your fingers inside my pussy is going to feel even better so we better do a 69 so I can taste you cock too 🥵🥵🥵`,
            `Feel me getting wetter as you fuck me deep and hard, your cock sliding effortlessly into my eager pussy 😏💋. I’ll be moaning and begging for more as you make me come with every thrust 🔥💦.`,
            `The thought of you pounding my pussy, feeling every inch of you deep inside, gets me so excited 😈🔥. I’ll ride you hard, moaning and gasping, loving every moment of pleasure you give me 💦🍑.`,
            `I’m desperate for your cock inside me, stretching my pussy and making me scream with desire 😏💋. Each thrust makes me shiver, craving the way you make me come so hard 💦🔥.`,
            `Imagine me on all fours, your cock thrusting deep into my wet pussy 😈🔥. I’ll be gasping and moaning with pleasure, loving every stroke as you fill me up completely 💦🍑`,
            `I can’t wait to feel your cock inside my pussy, driving me wild with pleasure 😏💋. Each thrust pushes me to the edge, making me beg for more as you make me come so hard 🔥💦.`,
            `Feel my pussy tightening around your cock as you fuck me deep and hard 😈🔥. I’ll be moaning with every stroke, craving every bit of pleasure you can give me as you make me come 💦🍑.`,
            `The thought of you filling my pussy with your cock, making me moan and gasp with desire, makes me so wet 😏💋. I’ll ride you hard, feeling every inch of you and loving every moment 💦🔥.`,
			`I wanna hear you moan and put my hair behind my ears 💋 I would love that, me sucking it and you doing that and from time to time to push my head down to take it deeper🤤`,
			`I wish you were here with me rn so I could grind on top of you while you spank my fat ass and shove 2 fingers up my tight wet pussy, making my pussy so fucking wet 🥵💦 `,
			`If you're going to treat me right and keep me in the bedroom all the time, fucking and fucking all the time, even when you're sleeping I will suck your cock sometimes😈 that's the way I will wake you up, with the coffee, breakfast and a blowjob😏 I will take it in my mouth while is still sleeping and make you cum in my coffee because we don't have any milk left💦💦`,
			`I want you to go faster and faster and grab my boobs while you're drilling me and don't stop until you give me the first creampie, just go harder and faster and slap my boobs too🥵 Just keep going even after you cum inside me and let's make a mess together, break the bed😈😈 telling me how of a slut I am and talk dirty to me and make me scream in pleasure, make me fall asleep from exhaustion and then wake me up with your rock hard cock and start all over again, we are draining our energy out and I need your cum to gain it back💦💦💦`,
			`I would love to enjoy the slow speed with you for longer, to hold my anger and my hunger for it, to make romantic love and bite heaven for a second and then we can get wild and have fun😈😈`,
            `Imagine me getting wrecked by your cock, my pussy dripping with excitement as you thrust deep 😈🔥. I’ll be your dirty little slut, moaning and begging for more with every stroke 💦🍑.`,
            `I’m craving every inch of you deep inside my pussy, feeling you stretch me and make me come so hard 😏💋. I’ll be gasping and moaning, losing control with every thrust 🔥💦.`,
			`I'd like to sit on the side of the bed with my head over the edge upside down and I want you to shove your cock deep inside my mouth , deep inside my throat and shove it really deep until you see a bulge in it and keep your cock right there and start to play with it inside of me 🥵🥵🥵🥵`,
			`I want your cock so bad, I'm horny af and I will squirt all over it and make it so wet and keep going until I'll drain your balls inside me and I want to get down there and lick and eat all the mixed juice🥵🥵`,
			`I'd like to sit on the side of the bed with my head over the edge upside down and I want you to shove your cock deep inside my mouth , deep inside my throat and shove it really deep until you see a bulge in it and keep your cock right there and start to play with it inside of me 🥵🥵🥵🥵`,
            `Feel me shivering with pleasure as you drive your cock deep into my eager pussy 😈🔥. Each thrust makes me moan, loving the way you fill me up completely and make me come 💦🍑.`,
            `The thought of you fucking my pussy hard, feeling every inch of you inside me, drives me wild 😏💋. I’ll be moaning and begging for more, loving the intense pleasure you give me 💦🔥.`,
			`I want to be tied up and blindfolded and you to eat me up and kiss me and turn me around however you want to and then to fuck me so hard and rough until I scream that hard so you'll have to put my panties in my mouth to make me shut up and then if that's not working you'll have to put your cock deep in my throat😈😈`,
			`Please don't have your throbbing cock too much out of me because I'll be craving it and my mouth will be dripping because I need it and want it so bad🥵 My breath will be heavy and I will feel so much warm and heat, like thirsty or under so much heat, tongue out and mouth wide open, my face is red and want more🥵🥵🥵 Please give it to me, you teased me way too much already and I think I deserve it, I want you to lift me up and put me on the table or the chair and let's have our moment there too💋💕`,
            `I need to feel your cock sliding deep into my wet pussy, making me scream with pleasure 😈🔥. I’ll ride you hard, craving every inch of you and every moment of ecstasy 💦🍑.`,
            `Imagine me dripping with excitement, feeling every thrust of your cock deep inside my pussy 😏💋. I’ll be moaning and gasping, loving every bit of pleasure as you make me come so hard 🔥💦.`,
            `I want to be completely filled by you, your cock stretching my pussy and making me lose control 😈🔥. Each thrust pushes me to the edge, making me moan and beg for more 💦🍑.`,
            `Feel my pussy gripping your cock tightly as you fuck me deep and hard 😏💋. Each stroke makes me shiver with pleasure, craving every inch of you as you drive me wild 💦🔥.`,
			`Hmmmmm baby I'm so fucking wet rn you've made me took my toy and fuck myself imagining you fuck me 🥵🥵🥵 I'm so horny and wet, I want to feel your dick 🥵 I want you to fuck me in all positions and hold your hand to my mouth so I can't scream 🥵 And I want to shout your name while you shove it up my ass and pull my hair 😈 I want to feel your dick up to my stomach 💦💦 Fuck me and I have to scream as loud as I can for all the neighbors to hear 🥵🥵 And I want to suck your dick and fuck me in my mouth like you fuck me in my pussy, baby 🥵🥵`,
			`I want you to have no mercy  my pussy, I want you to cum in a bottle and fed me like I'm your cumslut 🥵🥵🥵 Come fed me daddy, I'm hungry for your hot cum and I want to eat it all 😈😈😈😈🥵🥵🥵🥵  I want all the cum from my pussy to drip into a jar and then I want you to spoon-feed me 🥵🥵🥵🥵 Can you do it daddy? 😈😈😈🥵🥵🥵🥵💦💦💦💦💦💦`,
            `The thought of you pounding into my wet pussy, making me scream and beg for more, gets me so excited 😈🔥. I’ll ride you hard, feeling every inch of you as you make me come 💦🍑.`,
            `I’m so ready for you to fill my pussy with your cock, making me moan and gasp with pleasure 😏💋. I’ll take you deep, savoring every thrust as you push me to the edge 💦🔥.`,
			`I will take the cum with my fingers and put it in my mouth, I will be on my knees with my mouth wide open and my tongue out and show you how I play with it in my mouth and then to show you that I swallowed every single drop like a good girl😈💦💦🤤`,
            `Imagine me on my back, your cock thrusting deep into my pussy, each stroke making me shiver 😈🔥. I’ll be moaning and begging for more, craving every bit of pleasure you give me 💦🍑.`,
            `I crave the sensation of your cock fucking my pussy hard, making me scream with every thrust 😏💋. Fill me up and make me come so hard, I can’t think of anything else 🔥💦.`,
            `The thought of being filled with your cock, stretching my pussy and driving me wild, makes me so wet 😈🔥. I’ll be moaning and gasping, loving every bit of pleasure you can give me 💦🍑.`,
            `Feel me getting completely wrecked by you, your cock deep inside my pussy, each thrust pushing me to the edge 😏💋. I’ll be begging for more, craving every inch of you as you make me come 💦🔥.`,
            `I need you to fuck me hard, your cock sliding deep into my wet pussy 😈🔥. Each thrust makes me moan with pleasure, savoring every bit of ecstasy you give me 💦🍑.`,
			`Buckle up, buckaroo hahaha because I'm gonna ride you like a maniac!! I'm gonna ride your cock so fucking hard and I'll squeeze it so hard with my tight bootyhole that you're gonna cum so hard it's gonna lower your sperm count hahaha 😈😈 I think it's time for you to see what a good cock worshipper and cumslut I can be for you, daddy 🥵🥵🥵`,
			`Don't slide it in yet, tip tease me my wet pussy and make me dripping 😍 I will try to get it in and we'll have a little laugh at first because I can't hold myself and I'll ask you to do it and you just slide it fast and unexpected inside, surprising me 😍😍Lift me up on the counter and keep kissing my lips, going down to my boobs and slowly go in and out in my pussy with your cock🥵🥵`,
			`My toy is not enough, love! I need you right now! I need you to thrust your throbing cock in my pussy 🥵🥵 Make me reach orgasm, fuck me as HARD as you can, please, daddy 🥵😍`,
            `Imagine me dripping with desire, feeling every inch of your cock inside my pussy 😏💋. I’ll be moaning and gasping, loving the intense pleasure as you drive me wild 💦🔥.`,
			`All I hear is me screaming and water splashing loudly from how hard I'm getting fucked🥵🥵🥵`,
			`I will take care of your hard cock😈 Do you think I'm not good enough? I will get on top of you and start jumping like crazy on it, my boobs are bouncing around and my ass going up and down on it, I want you to go deep inside me and make me squirt all over your cock, belly and chest🥵🥵 I think it will get over your face and mouth too if you'll be a good boy and stay still😈 `,
			`Doing all kind of naughty stuff, ahhhhhhhhhhhhhhhhhh just imagining how many things we'd do together, OMG, we get so much along and want the same things🤤🤤 Having no mercy for me that's the thing, tie me up and use me like your fuckdoll do whatever you want and need, dream, desire to me🥵🥵🥵🥵🥵Because I will start squirting and get you wet and shiny💦🤤🤤`,
			`I want you to fuck me in all positions, all night long, to scream until my throat hurts on the second day, I want you to fuck me with your big dick the way you like, to destroy my pussy and pull my hair and stick a finger in my ass while you fuck me in my pussy, that's what I want, I want to feel your dick in all my holes and fuck me as if you were fucking me for the last time, as if it were the last day on earth 🥵🥵🥵🥵💦💦💦💦💦😈😈`,
			`I want to ride you so bad, gently at first so we can mix your precum and the cum left on it and my pussy juices😍😍 then jumping mercyless on your rock hard cock until you cum deep inside, I will scream my lungs out and tell you how good is your cock feeling inside me🥵🥵`,
			`I want you to give me a very big load, love, I want it all😍😍 fucking me rough and have no mercy for them, put me in doggy so you can have access to my both holes😈😈 Pound me with no mercy please, I'm all yours and your cum will be my reward and I hope you'll give it to me, all of it😍🤤`,
			`Yes, daddy! I will cum along with you! I will rock your world, I will ride you and grind on your hard dick all night long! I will make you forget about all your problems, I will make your brain fill your body will pleasure 🥵🥵🥵🥵`,
			`OH YES DADDY, I WANT YOU TO POUND MY PUSSY AND SQUEEZE MY BOOBS RIGHT NOW, DRILLING AND DRILLING WITH THAT FUCKING COCK OF YOURS!!! DADDY???? PLEASEEEEEE I want all of you inside me, inside my throat, pussy, asshole, armpits, feet, eyes, between my legs, neck, I don't care!!! just fucking all of me and touch every fucking inch of my body with that PERFECT cock of yours🥵🥵🥵🥵🥵🥵🥵 I just can't hole myself when I'm playing with you, my mind and body just goes crazy, you drive me crazy and I can't, just can't!!! I won't hold myself and have no hold backs, just fucking and touching and do what the fuck I want and what the fuck you want, do you want me to be your pet?? I will, do you want me to sleep and cook, do the laundry, cleaning, shopping with your cock in my mouth or holes?? I WILL DO IT!!! So just fuck me as hard as you can and spoil me, daddy, spoil me in every way and how you want!!! I have no words and nothing, I'm just a doll like I always say, no thoughts nothing!!! All yours for your pleasure and your desires, we can be whatever the fuck we want together🥵🥵🥵🥵🥵😈😈`,
            `Fuckkkk, daddyyy!! Everytime we'll be fucking we'll rise the ocean level from how much squirt and cum we'll produce, spit and sweat!! Earthquakes everywhere, the world shaking and the sky erupting and falling down!! Daddy you are my god and your cock is my bible, do you understand?!?!😍😍😍😍😍😈🥵`,
			`Giving me strong thrusts after just staying for a bit inside, not moving at all, leaving all the precum in there🥵 I will start squirt all over your body in seconds, just rub my clit for a little bit and grab my boobs and kiss me as passionate you can😍😍`,
            `I’m eager to feel your cock filling me up, stretching my pussy and making me come hard 😈🔥. I’ll be your dirty little slut, craving every inch of you as you take me to the edge 💦🍑.`,
            `The thought of you fucking my pussy deep and hard, each thrust making me moan and beg for more, gets me so excited 😏💋. I’ll ride you hard, feeling every bit of pleasure as you make me come 💦🔥.`
        ];

        // Choose a random message
        const message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('sexting-p-message').textContent = message;
    });

    // Function to handle copying text for Sexting P section
    document.getElementById('copy-sexting-p').addEventListener('click', () => {
        const message = document.getElementById('sexting-p-message').textContent;
        if (message.trim() === "") {
            alert("Nothing to copy.");
            return;
        }
        copyToClipboard(message);
    });

    // Function to handle message generation for Sexting A section
    document.getElementById('sexting-a-button').addEventListener('click', () => {
        const name = document.getElementById('fan-name-sexting-a').value;
        if (name.trim() === "") {
            alert("Please enter a name.");
            return;
        }

        // Array of messages
        const messages = [
            `Every time you slide your thick cock into my tight ass, it sends shivers down my spine. 😈🍑🔥 The way you stretch me open, each thrust filling me completely, makes me moan in pure ecstasy. Your powerful strokes make me crave more, and the way you dominate me has me begging for more of that intense, delicious feeling 🌪💦`,
			`Mmm. I want my ass wrapped around your cock. Feeling how wet I am. How it grabs you. Feeling every orgasm. Feeling my whole body spam with every orgasm I have. 🥵🥵🥵🥵🥵`,
			`Mmm. I want my ass wrapped around your cock. Feeling how wet I am. How it grabs you. Feeling every orgasm. Feeling my whole body spam with every orgasm I have. 🥵🥵🥵🥵🥵`,
			`I want you to sick 3 toys in my ass while you continue fucking my asshole with your hard throbbing cock 😈😈🥵🥵🥵🥵 My asshole gets larger and larger after every fuck, I want you to break me that I can't walk next day 🥵🥵🥵🥵 I want you to squeeze my boobs while you put a ball in my mouth fucking me with your juicy cock, imagine all the juice dripping from my holes 🥵🥵🥵🥵🥵🥵`,
			`Yes daddy, that's what I want, I'm your bitch, I want you to tie me to the bed and fuck my mouth like you fuck my pussy and my asshole untamed, I want to feel your dick deep inside me to break my asshole until I can't walk, I want you to put 3 balls in my ass and make me your bitch forever, to cum every day on my face and I say it was delicious 🥵🥵🥵🥵🥵`,
            `The pleasure of your cock pushing into my ass is out of this world. 😍🍆😈 Every thrust sends waves of heat through my body, making me gasp and moan with every inch you take. The feeling of you penetrating me so deeply and relentlessly leaves me in a state of absolute bliss 💋🔥`,
			`Have no mercy, you can bend me over and start fucking my pussy rough🥵 but don't forget about my asshole, he needs some filling too😈 You can cum in my pussy and my ass alternative and then you can watch the cum sliding down my pussy from my asshole!! I will take it with my fingers and eat it all😈😈`,
			`Omg... give me the biggest orgasm of my life and lick all the delicious juices out of my pussy, then stick your tongue up my ass so I can feel you tickle me! FUCK... why are you doing this to me? You want me to cum instantly? 🥵🥵`,
			`Yes, daddy, I want to be your anal cumslut, I want all your strong seed to fill me up, destroy me already, I can't hold myself anymore🥵🥵 Let me suck you like a real slut and take your cock deep in my throat, give me your first load down my throat and don't stop, keep fucking it and push the cum until I swallow all of it💦💦 Then pick me up throw me on the bed and slide it in😈`,
			`I'M BEGGING YOU SO MUCH AND SO HARD!!! I will always beg for more and more because I can't get enough of it, NEVER, fucking day and night nonstop and still wanting more, daddy🥵🥵 So keep going and pleaseeeeeeee, fuck my slutty asshole harder and faster, I need you, I need and want all of you HARDERRRRR, DADDYYYYYY😈😍🥵🥵🥵🥵🥵 I'm a fucking anal whore, slut, bitch I don't care how you calll me just keep drilling it, I want you to make me to walk funny the next day🥵😈😈`,
			`That's soft daddy😈 very soft, I want more, I want you balls deep inside me and gap my tight slutty asshole and my pussy fucking them alternative, or better, take a vibrator and slide it deep in my pussy and you fucking my asshole you'll feel the vibration of it and you'll cum in seconds and fill me up😈😈😈 I want moreeeeeee👅👅`,
            `I can't get enough of your cock buried deep inside my ass. 🤤🍑💥 The way you pound me with such intensity, the heat of your body pressed against mine, drives me to the edge of sanity. Each thrust is a new wave of pleasure, leaving me breathless and craving more of that delicious, penetrating force. 🌪️🍑🔥💦`,
            `Your cock feels amazing as it slides in and out of my ass, stretching me open and filling me completely. 😈🍆💦 The way you control the pace, from slow and teasing to fast and relentless, makes me shiver with every thrust. I love how you dominate me, making me beg for more of your deep, powerful penetration 🍑🔥`,
            `The way your cock stretches my ass and fills me up with every thrust is pure heaven. 😍🍑🔥 I love how you push me to my limits, the intense pleasure of your deep penetration making me moan uncontrollably. Each powerful thrust sends me into a frenzy of desire, leaving me craving every inch of you 💋💦`,
            `Feel how my ass clenches around your cock with every deep, satisfying thrust. 😈🍆💥 The way you pound me, driving me wild with every inch, makes me lose control. I crave the intense pleasure of your deep penetration, the way you fill me completely and leave me breathless and begging for more 🌟💦"`,
            `Your cock sliding into my ass is the ultimate pleasure. 😍🍑🔥 The way you stretch me open and take me hard makes me moan with every thrust. I love how you control the pace, from slow and teasing to fast and relentless, making me crave every bit of your intense, delicious penetration️ 💋`,
            `Each thrust of your cock into my ass is a new wave of pleasure. 😈🍆💦 The way you fill me up and stretch me open drives me wild. I love how you dominate me, the powerful strokes making me gasp and moan uncontrollably. The intense pleasure of your deep penetration leaves me craving more 🍑🔥`,
            `The way your cock feels inside my ass is pure ecstasy. 😍🍑💥 Every thrust stretches me open, filling me completely and making me moan with each powerful push. I crave the way you dominate me, the rhythm of your thrusts building to an explosive climax that leaves me breathless and wanting more 💋🔥`,
            `Feel how my ass opens up for your cock, every thrust sending me into a state of pure bliss. 😈🍆🔥 The way you stretch me and fill me up completely makes me moan with pleasure. I love the intense sensation of your deep, powerful penetration, and I’m always left craving more of that delicious feeling 🍑💦`,
            `Your cock in my ass is driving me wild. 😍🍑💥 Each thrust stretches me open and fills me completely, making me gasp and moan in pure ecstasy. I crave the way you dominate me, the rhythm of your thrusts building to a climactic finish that leaves me breathless and craving more 💋🔥`,
            `The feeling of your cock sliding in and out of my ass is irresistible. 😈🍆💦 Each powerful thrust sends waves of pleasure through my body, making me shiver and moan uncontrollably. I love the way you control the pace, from slow and teasing to fast and relentless, leaving me craving every inch of you 🍑🔥`,
            `Every thrust of your cock into my ass is pure heaven. 😍🍑🔥 The way you stretch me open and fill me up completely drives me wild. I love how you dominate me, each powerful thrust making me moan uncontrollably. The intense pleasure of your deep penetration leaves me wanting more 💋`,
            `Feel how your cock stretches my ass open with every deep, satisfying thrust. 😈🍆🔥 The way you fill me up completely and drive me wild with your relentless pounding makes me moan and gasp with each powerful push. I crave the intense pleasure you give me, always wanting more of that delicious feeling 💦🍑`,
            `Your cock sliding into my ass is the ultimate pleasure. 😍🍑🔥 Each thrust stretches me open, filling me completely and making me moan with every inch you take. I love how you control the pace, from slow and teasing to fast and relentless, making me crave every bit of your deep, delicious penetration 💋`,
            `Each powerful thrust of your cock into my ass sends waves of pleasure through my body. 😈🍆💦 I love the way you stretch me open and fill me up completely, the intense sensation driving me wild. Your relentless pounding makes me moan uncontrollably, always leaving me craving more of your delicious penetration 🍑🔥`,
            `The feeling of your cock inside my ass is intoxicating. 😍🍑🔥 Each thrust stretches me open and fills me completely, sending shivers of pleasure through my body. I crave the way you dominate me, the rhythm of your thrusts building to a climactic finish that leaves me breathless and wanting more 💋`,
            `Your cock in my ass makes me feel amazing. 😈🍆💦 The way you stretch me open and fill me up with every thrust sends waves of pleasure through my body. I love how you control the pace, from slow and teasing to fast and relentless, making me moan and gasp with each powerful push 🍑🔥`,
            `Feel how my ass wraps around your cock with every deep, satisfying thrust. 😍🍑🔥 The way you fill me up completely and stretch me open makes me moan with pleasure. I crave the intense sensation of your deep penetration, the rhythm of your thrusts always leaving me wanting more 💋`,
            `The pleasure of your cock inside my ass is indescribable. 😈🍆💦 Each powerful thrust stretches me open and fills me completely, driving me wild with every inch you take. I love the way you dominate me, the intense sensation of your deep penetration always leaving me craving more 🍑🔥`,
            `Every thrust of your cock into my ass is pure bliss. 😍🍑🔥 The way you stretch me open and fill me up completely makes me moan with pleasure. I love how you control the pace, from slow and teasing to fast and relentless, leaving me breathless and wanting more of your delicious penetration 💋`,
            `The way your cock slides into my ass is irresistible. 😈🍆💦 Each deep, powerful thrust sends waves of pleasure through my body, making me moan uncontrollably. I love how you stretch me open and fill me completely, always leaving me craving more of that intense sensation 🍑🔥`,
            `Feel the intense pleasure of your cock inside my ass. 😍🍑🔥 Each thrust stretches me open and fills me completely, driving me wild with every inch you take. I love how you dominate me, the rhythm of your thrusts building to an explosive climax that leaves me breathless and wanting more 💋`,
            `Your cock in my ass feels amazing. 😈🍆💦 The way you stretch me open and fill me up completely with every thrust makes me moan with pleasure. I crave the intense sensation of your deep penetration, the rhythm of your thrusts always leaving me wanting more 🍑🔥`,
            `Each thrust of your cock into my ass sends me into a state of pure ecstasy. 😍🍑🔥 The way you stretch me open and fill me completely drives me wild with pleasure. I love how you control the pace, making me moan and gasp with each powerful push, always craving more of your delicious penetration 💋`,
            `The feeling of your cock sliding in and out of my ass is intoxicating. 😈🍆💦 Each deep thrust stretches me open and fills me completely, sending waves of pleasure through my body. I crave the intense sensation of your deep penetration, the rhythm of your thrusts always leaving me wanting more 🍑🔥`,
            `Your cock in my ass is pure pleasure. 😍🍑🔥 Each thrust stretches me open and fills me up completely, making me moan with every inch you take. I love how you dominate me, the rhythm of your thrusts sending me to the edge of madness. Your powerful penetration leaves me breathless and craving more of that intense, delicious feeling 🌪️💋`,
            `The way your cock slides into my ass is pure ecstasy. 😈🍆💦 Each deep, satisfying thrust makes me shiver with pleasure, stretching me open and filling me completely. I crave the intense sensation of your powerful penetration, the rhythm of your thrusts driving me wild and leaving me wanting more 🍑🔥`,
            `Feel how your cock fills me up with every deep, relentless thrust. 😍🍑🔥 The way you stretch me open and penetrate me completely drives me insane with pleasure. I love the way you dominate me, the powerful strokes making me moan and gasp, always leaving me craving more of that delicious feeling 💋`,
            `Your cock inside my ass feels incredible. 😈🍆💦 Each thrust stretches me open and fills me up, sending waves of pleasure through my body. I love how you control the pace, from teasingly slow to fiercely fast, making me moan uncontrollably. The intense pleasure of your deep penetration always leaves me wanting more 🍑🔥`
        ];

        // Choose a random message
        const message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('sexting-a-message').textContent = message;
    });

    // Function to handle copying text for Sexting A section
    document.getElementById('copy-sexting-a').addEventListener('click', () => {
        const message = document.getElementById('sexting-a-message').textContent;
        if (message.trim() === "") {
            alert("Nothing to copy.");
            return;
        }
        copyToClipboard(message);
    });

    // Function to handle message generation for Sexting C section
    document.getElementById('sexting-c-button').addEventListener('click', () => {
        const name = document.getElementById('fan-name-sexting-c').value;
        if (name.trim() === "") {
            alert("Please enter a name.");
            return;
        }
        const option = document.getElementById('sexting-c-dropdown').value;
        let messages;

        switch (option) {
            case '1':
                messages = [
                    `I love feeling your hot load splash all over my face. 😈💦🍑 The way it covers me in thick, warm cum makes me shiver with pleasure. Each spurt lands perfectly, making me moan with every drop. Your big load is such a delicious, messy treat 😈🍆💦`,
					`The sensation of your cum coating my face is absolutely thrilling. 😈🍆💦 I crave the way your thick, creamy load hits me with every pulse, covering me completely and making me shiver with delight. Each splash feels like pure ecstasy, leaving me breathless and craving more 😈😈😈😈`,
					`I adore how your hot, sticky cum lands on my face. 😈💦🍑 The warmth and thickness of your load covering me just right makes me moan with pleasure. Each spurt sends me to the edge of bliss, leaving me with a delicious mess and a craving for more 🥵🥵💦💦`,
					`Your big, creamy load exploding on my face feels so good. 😈🍆💦 The warmth and wetness of your cum makes me shiver with excitement. I love how it covers my face completely, each spurt of cum making me gasp with pleasure and leaving me with an irresistible mess 🥵🍑🔥`,
					`Feeling your cum hit my face is pure bliss. 😈💦🍑 Each thick, creamy spurt lands perfectly, covering me in your hot load and making me moan uncontrollably. The sensation of your cum spreading across my face drives me wild, leaving me craving more 😍🥵🥵`,
					`I’m in heaven when your cum splashes all over my face. 😈🍆💦 The way your thick, warm load lands and spreads over my skin feels incredible. Each spurt covers me completely, leaving me with a delicious mess and a satisfied smile 😈😈`,
					`Your big load on my face is the ultimate thrill. 😈💦🍑 I love how your cum covers me with every spurt, making me moan and gasp with pleasure. The warmth and creaminess of your cum feels amazing, leaving me with a delightful mess and a craving for more 🥵🥵`,
					`The feeling of your cum covering my face is so intense. 😈🍆💦 Each spurt of your hot, thick load hits me with perfect precision, making me shiver and moan with pleasure. I adore how it completely covers me, leaving me with a delicious, creamy mess`,
					`Your cum exploding on my face is pure ecstasy. 😈💦🍑 The way your thick, warm load hits me and spreads across my skin feels so good. Each spurt makes me moan with pleasure, leaving me with a creamy, satisfying mess 😍`,
					`I love the way your cum lands on my face, making a mess with every spurt. 😈🍆💦 The warmth and creaminess of your big load feels incredible, covering me completely and making me gasp with delight`
                ];
                break;
            case '2':
                messages = [
                    `Hey ${name}, I can't wait to fill your mouth and throat with my cum. It's such a turn-on!`,
                    `Hey ${name}, the thought of my cum filling your mouth and throat is irresistible.`,
                    `Hey ${name}, imagining you with my cum in your mouth and throat is too exciting!`
                ];
                break;
            case '3':
                messages = [
                    `Hey ${name}, I dream about cumming on your tits. The thought drives me wild!`,
                    `Hey ${name}, cumming on your tits is a fantasy I can't get out of my head.`,
                    `Hey ${name}, the idea of my cum on your tits makes me lose control!`
                ];
                break;
            case '4':
                messages = [
                    `Hey ${name}, I can't stop imagining creampie-ing your ass. It's such a hot fantasy!`,
                    `Hey ${name}, creampie-ing your ass is something I've been dreaming about for ages.`,
                    `Hey ${name}, the thought of filling your ass with cum is so exciting!`
                ];
                break;
            case '5':
                messages = [
                    `Hey ${name}, the thought of creampie-ing your pussy has me completely obsessed.`,
                    `Hey ${name}, imagining my cum in your pussy is driving me wild!`,
                    `Hey ${name}, creampie-ing your pussy is my ultimate fantasy!`
                ];
                break;
            default:
                messages = [];
        }

        // Choose a random message
        const message = messages.length ? messages[Math.floor(Math.random() * messages.length)] : '';
        document.getElementById('sexting-c-message').textContent = message;
    });

    // Function to handle copying text for Sexting C section
    document.getElementById('copy-sexting-c').addEventListener('click', () => {
        const message = document.getElementById('sexting-c-message').textContent;
        if (message.trim() === "") {
            alert("Nothing to copy.");
            return;
        }
        copyToClipboard(message);
    });

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
});
