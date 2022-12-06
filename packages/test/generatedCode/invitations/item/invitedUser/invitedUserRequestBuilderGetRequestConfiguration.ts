import {InvitedUserRequestBuilderGetQueryParameters} from './invitedUserRequestBuilderGetQueryParameters';
import {RequestOption} from '@microsoft/kiota-abstractions';

export interface InvitedUserRequestBuilderGetRequestConfiguration {
    /** Request headers */
    headers?: Record<string, string>;
    /** Request options */
    options?: RequestOption[];
    /** Request query parameters */
    queryParameters?: InvitedUserRequestBuilderGetQueryParameters;
}
