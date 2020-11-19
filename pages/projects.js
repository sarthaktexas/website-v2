import Head from '../components/head'
import Nav from '../components/nav'
import ProjectCard from '../components/project-card'
import Card from '../components/card'
import Social from '../components/social'

export default function ProjectsPage() {
    return (
        <>
            <Head />
            <Nav />
            <div className="mx-8 md:mx-10 lg:mx-16 mt-4">
                <h1 className="heading inline-block w-auto">
                    Projects
                </h1>
                {/* <ProjectCard title="Yeehaw" description="YOLO BOY DING DONG HAHAHAHHAHA ODSIJFLKSD JFDSLKJF DSKLJFSDLIFJEOIGJSODIGJLKSFGJFSKLGJLDFKGJOIDFGJORIGJOIFDJGODFJGLKDFJG LKDFJGDF" href="" icon="bank-line" color="red-500"/> */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {/* <div class="masonry-with-flex mb-8"> */}
                    <Card title="Website" href="/" width="48" imgsrc="https://images.unsplash.com/photo-1490478965551-2364145dccb4"/>
                    <Card title="Find Me" href="" width="32" imgsrc="https://images.unsplash.com/photo-1478860409698-8707f313ee8b" />
                    <Card title="Task List" href="" width="3/5" imgsrc="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"/>
                    <Card title="Zoom Dashboard" href="" width="56" imgsrc="https://images.unsplash.com/photo-1545231097-cbd796f1d95f"/>
                    <Card title="Resource Bank" href="" width="64" imgsrc="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f"/>
                    <Card title="Kahoot Hack Bot" href="" width="32" imgsrc="https://images.unsplash.com/photo-1554755229-ca4470e07232"/>
                    <Card title="Quizlet Hack Bot" href="" width="56" imgsrc="https://images.unsplash.com/photo-1555181937-efe4e074a301"/>
                    <Card title="Science Bowl Timer and Scorekeeper" href="" width="1/6" imgsrc="https://images.unsplash.com/photo-1534672062631-cc37c6fea687"/>
                    <Card title="Salamandarian" href="" width="48" imgsrc="https://images.unsplash.com/photo-1471359733779-ff9dc91cdb00"/>
                    <Card title="fiveable.me" href="" width="64" imgsrc="https://images.unsplash.com/photo-1588421357574-87938a86fa28"/>
                    <Card title="Discord User Bot" href="" width="56" imgsrc="https://images.unsplash.com/photo-1557672172-298e090bd0f1"/>
                    <Card title="Send Message Serverless" href="" width="1/3" imgsrc="https://images.unsplash.com/photo-1511357248427-58b1d7c798c5"/>
                    <Card title="Home Automation Serverless" href="" width="1/4" imgsrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"/>
                    <Card title="Kick Talking User Discord Bot" href="" width="5/12" imgsrc="https://images.unsplash.com/photo-1519874179391-3ebc752241dd"/>
                    <Card title="Link Shortener" href="" width="64" imgsrc="https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d" />
                    <Card title="Rudolph" href="" width="auto" imgsrc="https://images.unsplash.com/photo-1482003297000-b7663a1673f1"/>
                </div>
                <Social />
            </div>
        </>
    )
}