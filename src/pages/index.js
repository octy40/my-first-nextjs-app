import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

const API_KEY = "e77eaace93c74f278851f97e57f639a1";
const API_URL = "https://api.spoonacular.com";

export async function getServerSideProps() {
    const recipeReq = await axios.get(`${API_URL}/recipes/random?apiKey=${API_KEY}`);
    return {
        props: {
            recipe: recipeReq.data.recipes[0]
        }
    };
}

function HomePage({ recipe }) {
    return(
        <div>
            <Head>
                <title>Random Recipe</title>
            </Head>
            <div>
                <h2>Random Recipe</h2>
                <h4>Recipe Title: {recipe.title}</h4>
                <Image src={recipe.image} width={500} height={500} alt="pic of recipe" />
                <Link href={`/recipes/similar/${recipe.id}`}>Get Similar Recipes</Link>
            </div>
        </div>
    );
}

export default HomePage;