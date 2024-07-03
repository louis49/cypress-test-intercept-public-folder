import { MountingOptions, VueWrapper } from 'cypress/vue';
import {RequestHandler} from "msw";

declare global {
    namespace Cypress {
        interface Chainable {
            mount<V extends Vue>(component: V, options?: MountingOptions<V>): Chainable<VueWrapper<V>>;
        }
    }
}