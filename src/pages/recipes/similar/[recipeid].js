import axios from "axios";
import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps(ctx) {
    const { recipeid } = ctx.query;
    const API_URL = process.env.API_URL;
    const API_KEY = process.env.API_KEY;
    const similarRecipeReq = await axios.get(`${API_URL}/recipes/${recipeid}/similar?apiKey=${API_KEY}`);
    return {
        props: {
            similarRecipes: similarRecipeReq.data
        }
    }
};

export default function SimilarRecipes({ similarRecipes }) {
    return (
        <p>
            {similarRecipes.map((recipe, index) => {
                return(<li key={`${index}-similar-recipe`}>{recipe.title}</li>);
            })}
        </p>
    );
};