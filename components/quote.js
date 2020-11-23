const quotes = [
    "Things change. And friends leave. Life doesn't stop for anybody.",
    "The thing about finishing a story is that finishing is really only the beginning.",
    "Show no fear. Take risks. Don't put yourself in front of your team.",
    "Life goes fast. Take action, don't wait.",
    "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    "It is much more difficult to judge oneself than to judge others. If you succeed in judging yourself rightly, then you are indeed a man of true wisdom.",
    "All grown-ups were once children... but only few of them remember it",
    "It is the time you have wasted for your rose that makes your rose so important.",
    "I am who I am and I have the need to be.",
    "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.",
    "All men have stars, but they are not the same things for different people. For some, who are travelers, the stars are guides. For others they are no more than little lights in the sky. For others, who are scholars, they are problems... But all these stars are silent. You-You alone will have stars as no one else has them.",
    "No one is ever satisfied where he is.",
    "You become responsible, forever, for what you have tamed.",
    "Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.",
    "What matters most are the simple pleasures so abundant that we can all enjoy them...Happiness doesn't lie in the objects we gather around us. To find it, all we need to do is open our eyes.",
    "A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.",
    "But the eyes are blind. One must look with the heart.",
    "It is the time you have wasted for your rose that makes your rose so important.",
    "What makes the desert beautiful, is that somewhere it hides a well..",
    "Snow hides a lot.",
    "Bottling up all that emotion turns into anxiety",
    "Your life is to be lived. Not put into a neat container to try and control. It's not possible. Trust me.",
    "When life offers you something special...you take it.",
    "You're never gonna be happy if you constantly live in fear.",
    "Maybe you can afford to wait. Maybe for you there's a tomorrow. Maybe for you there's one thousand tomorrows, or three thousand, or ten, so much time you can bathe in it, roll around it, let it slide like coins through you fingers. So much time you can waste it. But for some of us there's only today. And the truth is, you never really know.",
    "That's the thing about best friends. That's what they do. They keep you from spinning off the edge.",
    "And I guess that's when it starts to hit me: the whole point is, you do what you can.",
    "The last laugh, the last cup of coffee, the last sunset, the last time you jump through a sprinkler, or eat an ice-cream cone, or stick your tongue out to catch a snowflake. You just don't know.",
    "I shiver, thinking how easy it is to be totally wrong about people — to see one tiny part of them and confuse it for the whole, to see the cause and think it's the effect or vice versa.",
    "That's when I realized that certain moments go on forever. Even after they're over they still go on, even after you're dead and buried, those moments are lasting still, backward and forward, on into infinity. They are everything and everywhere all at once. They are the meaning.",
    "That's the way I feel, at least: like there's a real me and a reflection of me, and I have no way of telling which is which.",
    "I've never really thought about it before, but it's a miracle how many kinds of light there are in the world, how many skies: the pale brightness of spring, when it feels like the whole world's blushing; the lush, bright boldness of a July noon; purple storm skies and a green queasiness just before lightning strikes and crazy multicolored sunsets that look like someone's acid trip.",
    "Hope is the thing with feathers that perches in the soul - and sings the tunes without the words - and never stops at all.",
    "Our future is up to us.",
    "There are two paths you can take. Yours, or the path others choose for you.",
    "There'll come a time when you have to make a hard choice. And, in that moment, you will discover what mettle you truly have, and what you're prepared to risk, for what matters.",
    "Paint your own picture. Don't be thrown off course by other people.",
    "It's always there, the truth. You just need to look for it.",
    "You have to make some noise if you want to be heard.",
    "My life is my own. And the future is up to us.",
    "Don't stop till you're proud.",
    "The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures.",
]

var quote = quotes[Math.floor(Math.random() * quotes.length)];

export default function QuoteRandomizer(props) {
    return (
        <blockquote className="z-0 relative p-4 text-xl italic border-l-4 text-black border-white quote">
            <div className="stylistic-quote-mark" aria-hidden="true">
                &ldquo;
            </div>
            <p className="z-10 mb-4 text-white font-bold font-sans">{ quote }</p>
        </blockquote>
    )
}