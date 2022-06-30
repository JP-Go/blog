import "solid-styled-components"

declare module "solid-styled-components" {
	export interface DefaultTheme {
		palletes: {
			light?: {
				primary?:string
				secondary?: string
				tertiary?: string
				quaternary?: string
				bg?:string,
				fg?:string
			}
			dark?: {
				primary?:string
				secondary?: string
				tertiary?: string
				quaternary?: string
				bg?:string,
				fg?:string
			}
		}
	}
}
