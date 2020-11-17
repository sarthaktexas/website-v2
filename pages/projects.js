import Head from '../components/head'
import Nav from '../components/nav'
import ProjectCard from '../components/project-card'
import Social from '../components/social'

export default function ProjectsPage() {
    return (
        <>
            <Head />
            <Nav />
            <div className="mx-8 md:mx-10 lg:mx-16 mt-4">
                <h1 className="heading text-center">
                    Projects
                </h1>
                <ProjectCard title="Yeehaw" description="YOLO BOY DING DONG HAHAHAHHAHA ODSIJFLKSD JFDSLKJF DSKLJFSDLIFJEOIGJSODIGJLKSFGJFSKLGJLDFKGJOIDFGJORIGJOIFDJGODFJGLKDFJG LKDFJGDF" href="" icon="bank-line" color="red-500"/>
                <Social />
            </div>
        </>
    )
}