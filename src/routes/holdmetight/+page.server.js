import { redirect } from "@sveltejs/kit";

const formUrl = "https://forms.gle/BNWQT3UeYmbqBpCf8";

export function load() { 
    throw redirect(302, formUrl);
}