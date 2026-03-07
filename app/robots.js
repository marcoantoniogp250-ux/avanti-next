export default function robots() {
    return {
        rules: [
            // All bots — allow everything
            { userAgent: '*', allow: '/' },
            // AI search engines — explicit allow for citation crawling
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ChatGPT-User', allow: '/' },
            { userAgent: 'PerplexityBot', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'anthropic-ai', allow: '/' },
            { userAgent: 'Google-Extended', allow: '/' },
            { userAgent: 'Bingbot', allow: '/' },
            { userAgent: 'Amazonbot', allow: '/' },
        ],
        sitemap: 'https://avanticorretora.com.br/sitemap.xml',
    };
}
