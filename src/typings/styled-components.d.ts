import "styled-components"

import { Theme } from "@/themes/default"

declare module "styled-components" {
	interface DefaultTheme extends Theme {}
}
