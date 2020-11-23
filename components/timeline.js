import Slide from 'react-reveal/Slide'

const times = [
    {
        title: 'Youth Code Jam',
        position: 'Student Volunteer and Station Lead',
        description: 'Making coding and computer science fun, sociable, and accesible for all.',
        date: new Date('2018-05-22'),
    },
    {
        title: 'Fiveable',
        position: 'Social Media Marketing and Research Intern',
        date: new Date('2019-05-28'),
    },
    {
        title: 'Red Ink Review',
        position: 'Design and Marketing Intern',
        date: new Date('2020-07-15'),
    },
    {
        title: 'Brandeis High School',
        position: '',
        description: 'On the STEM track, set to graduate in 2022.',
        date: new Date('2019-08-26'),
    },
    {
        title: 'Rapid App',
        position: '',
        description: 'Design Engineer and Front-end and Back-end Developer',
        date: new Date('2020-06-05'),
    },
    {
        title: 'Resource Bank',
        position: '',
        description: 'Lead Developer and Subject Leader',
        date: new Date('2020-06-15'),
    },
    {
        title: 'Alamo City Hacks',
        position: 'Lead Organizer',
        description: 'Inclusively creating the next-generation of South Texas hackathons.',
        date: new Date('2020-08-26'),
    },
    {
        title: 'Hack Club',
        position: 'Community Lead and Member',
        description: 'We are the movement of students building the classes we wish we could take.',
        date: new Date('2020-09-16'),
    },
]

const sortedTimes = times.slice().sort((a, b) => a.date - b.date)

export default function timeline(props) {
    return (
        <>
            <div className="flex justify-center h-full mt-20 mb-20 mx-6 md:mx-24">
                <div id="timeline">
                    <h3 className="font-bold text-3xl text-white mb-3 ml-6 md:ml-4">Timeline of Me</h3>
                    <div id="events" className="grid grid-rows-auto grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <Slide bottom cascade>
                            {sortedTimes.map(({ title, position, description, date }) => (
                                <div key={`${title}-${date}`} className="rounded p-4 md:px-4 md:py-2 flex flex-col flex-1 justify-start md:flex-row md:flex-2">
                                    <div>
                                        <i className="ri-checkbox-circle-fill ml-2 md:ml-0 group-hover:shadow-lg" style={{ fontSize: 20, color: '#00BFA5'}}/>
                                    </div>
                                    <div className="pointer-events-none text-white text-left ml-2">
                                        <h1 className="inline-block w-auto font-bold text-xl">
                                            {title}
                                        </h1>
                                        <p className={`text-white ${description ? 'font-bold' : ''} text-opacity-50 text-base`}>
                                            {position}
                                        </p>
                                        <p className="text-white text-opacity-50 text-base">
                                            {description}
                                        </p>
                                        <p className="italic text-white text-opacity-25 text-base">
                                            {`${date.toLocaleString('en-us', { month: 'long' })} ${date.getFullYear()}`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>
                </div>
            </div>
        </>
    )
}