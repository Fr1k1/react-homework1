import Section from "../../Components/Section/Section";
import SinglePage from "../../Components/SinglePage/SinglePage";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import coursesMock from "../../utils/mock/courses";

const Course_page = () => {

    const { id } = useParams();

    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);



    useEffect(() => {

        setTimeout(() => {

            setCourses(coursesMock);

        }, 1000);
    }, []);

    useEffect(() => {

        courses && setCourse(courses.filter((course) => course.id === parseInt(id)));

    }, [courses, id]) //osluskujem svaku promjenu na courses state varijabli


    return (

        course && (
            <div>

                <Header />
                <Section title={course.title}>
                    <SinglePage
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        content={
                            course.content
                        }
                    />
                </Section>
            </div>)
    );
};
export default Course_page;
