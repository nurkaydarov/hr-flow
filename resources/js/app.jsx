import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {hydrateRoot} from "react-dom";
import Layout from "@/Layouts/Layout.jsx";


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
function setupPageLayout(module) {
    if (!module.default.layout) {
        module.default.layout = (p) => <Layout children={p}></Layout>
    }
}
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]

        page.default.layout = name.startsWith('Public/') ? undefined : page => <Layout children={page} />
        console.log(name)
        return page
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});
