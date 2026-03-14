import type { Config } from "tailwindcss";

export default {
	plugins: [require("@tailwindcss/typography")],
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						a: {
							textUnderlineOffset: "2px",
							"&:hover": {
								"@media (hover: hover)": {
									textDecorationColor: "var(--color-link)",
									textDecorationThickness: "2px",
								},
							},
						},
						code: {
							backgroundColor: "var(--color-inline-code-bg)",
							borderRadius: "2px",
						},
						kbd: {
							"&:where([data-theme='dark'], [data-theme='dark'] *)": {
								background: "var(--color-global-text)",
							},
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							marginInlineStart: "calc(var(--spacing) * 0.5)",
							a: {
								"&:after": {
									content: "']'",
								},
								"&:before": {
									content: "'['",
								},
								"&:hover": {
									"@media (hover: hover)": {
										color: "var(--color-link)",
									},
								},
							},
						},
						/* Table */
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed #666",
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							borderBottom: "1px dashed #666",
							fontWeight: "700",
						},
						'th[align="center"], td[align="center"]': {
							"text-align": "center",
						},
						'th[align="right"], td[align="right"]': {
							"text-align": "right",
						},
						'th[align="left"], td[align="left"]': {
							"text-align": "left",
						},
						".expressive-code, .admonition, .github-card": {
							marginTop: "calc(var(--spacing)*4)",
							marginBottom: "calc(var(--spacing)*4)",
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: "var(--text-sm)",
							fontWeight: "400",
						},
						h2: {
							marginTop: "1.4em",
							marginBottom: "0.7em",
						},
						h3: {
							marginTop: "1.2em",
							marginBottom: "0.55em",
						},
						h4: {
							marginTop: "1.2em",
							marginBottom: "0.45em",
						},
						":where(h2, h3, h4, hr) + :where(p)": {
							marginTop: "0.6em",
						},
						p: {
							marginTop: "0.4em",
							marginBottom: "0.4em",
							lineHeight: "1.5",
							letterSpacing: "0.02em",
							wordSpacing: "0.06em",
						},
            "ul, ol": {
              marginTop: "0.6em",
              marginBottom: "0.6em",
            },
						li: {
							marginTop: "0.4em",
							marginBottom: "0.4em",
							lineHeight: "1.5",
							letterSpacing: "0.02em",
							wordSpacing: "0.06em",
						},
						"ul > li > ul, ul > li > ol, ol > li > ul, ol > li > ol": {
							marginTop: "0",
							marginBottom: "0",
						},
						hr: {
							marginTop: "1rem",
							marginBottom: "1rem",
						},
						blockquote: {
							borderLeftWidth: "0",
							marginTop: "0.4em",
							marginBottom: "0.4em",
						},
            "blockquote p": {
              marginTop: "0",
              marginBottom: "0",
            },
					},
				},
			}),
		},
	},
} satisfies Config;
