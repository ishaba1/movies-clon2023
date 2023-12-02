import createPortal from "react-dom"
import AppCard from "../../../core/components/app_card/app_card";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import AppSwiper from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import {
    getPopularMovies,
    getTopRatedMovies,
} from "../services/movies.services";
import useSWR from "swr";

import AppModal from "../../../core/components/app_modal/app_modal"
import { useModal } from "../../../core/components/app_modal/hook/use_modal"
import NavBarMovie from "../../../componentes/navbar/NavBarMovie";
import FooterMovie from "../../../componentes/footerMovie/FooterMovie";

const HomeView = () => {
    const { isOpen, closeModal, openModal } = useModal();

    const {
        data: popularMovies,
        error: popularMoviesError,
        isLoading: popularMoviesIsLoading,
    } = useSWR("getPopularMovies", getPopularMovies);

    const {
        data: topRatedMovies,
        error: topRatedMoviesError,
        isLoading: topRatedMoviesIsLoading,
    } = useSWR("getTopRatedMovies", getTopRatedMovies);

    return (
        <div>
            <div>
                <NavBarMovie/>
            </div>


            <div>
                <AppCarouselSection title={"Popular Movies"} data={popularMovies} />
            </div>

            <button onClick={openModal}>ABRIR</button>

            <AppModal open={isOpen} onClickedOut={closeModal}>
                <div
                    style={{
                        height: "300px",
                        width: "300px",
                        backgroundColor: "white",
                        color: "red",
                    }}
                >
                    hola soy un modal
                    <button onClick={closeModal}>Cerrar</button>
                </div>
            </AppModal>
            
            <div>
                <FooterMovie/>
            </div>

        </div>
    );
};





/*
const HomeView = () => {
    
    return (
        <div>
            <h1>Peliculas Mejor Puntuadas </h1>
            <AppSwiper>
                {Array.from({ length: 10}).map((_,index) => (
                    <AppSwiperSlide key={index}>
                        <div
                            style={{
                                height: '150px',
                                width:'250px',
                                backgroundColor: 'red',
                            }}
                        >
                            <h3>{index}</h3>
                        </div>
                    </AppSwiperSlide>
                    ))}
            </AppSwiper>

            

            

            <h1>Peliculas Mejor Puntuadas </h1>
            <AppSwiper>
                {Array.from({ length: 10}).map((_,index) => (
                    <AppSwiperSlide key={index}>
                        <div
                            style={{
                                height: '150px',
                                width:'250px',
                                backgroundColor: 'red',
                            }}
                        >
                            <h3>{index}</h3>
                        </div>
                    </AppSwiperSlide>
                    ))}
            </AppSwiper>
        </div>
    );
};
*/

export default HomeView;