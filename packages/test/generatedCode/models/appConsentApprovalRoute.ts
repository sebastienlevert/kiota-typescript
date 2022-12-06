import {AppConsentRequest, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppConsentApprovalRoute extends Entity, Partial<Parsable> {
    /** A collection of userConsentRequest objects for a specific application. */
    appConsentRequests?: AppConsentRequest[];
}
