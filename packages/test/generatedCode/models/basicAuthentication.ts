import {ApiAuthenticationConfigurationBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BasicAuthentication extends ApiAuthenticationConfigurationBase, Partial<Parsable> {
    /** The password. It is not returned in the responses. */
    password?: string;
    /** The username. */
    username?: string;
}
