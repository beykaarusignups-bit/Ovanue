import { db } from "./firebase.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

loadHomepage();

async function loadHomepage() {

    try {

        const snap = await getDoc(doc(db, "homepage", "content"));

        if (!snap.exists()) {

            console.log("Homepage content not found.");

            return;

        }

        const data = snap.data();

        document.getElementById("announcementBar").textContent = data.announcement;

        document.getElementById("heroSubtitle").textContent = data.heroSubtitle;

        document.getElementById("heroTitle").innerHTML = data.heroTitle;

        document.getElementById("heroDescription").textContent = data.heroDescription;

        document.getElementById("heroButton").textContent = data.heroButton;

        document.getElementById("heroButton").href = data.heroLink;

        if (data.heroImage) {

            document.getElementById("heroImage").src = data.heroImage;

        }

    }

    catch (error) {

        console.error(error);

    }

}
