
export default function sitemap() {
    // const giantCorpsRoutes = giantCorps.map((giantCorp) => ({
    //     url: `https://safwat-almaerifa.vercel.app/${encodeURIComponent(giantCorp.href)}`,
    //     lastModified: new Date().toISOString().split('T')[0],
    // }))
    const routes = ['', '/about', "/names-of-Allah", "ruiners", "quran"].map((route) => ({
        url: `https://safwat-almaerifa.vercel.app/${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes];
}