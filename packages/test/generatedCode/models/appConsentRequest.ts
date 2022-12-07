import {AppConsentRequestScope, Entity, UserConsentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppConsentRequest extends Entity, Partial<Parsable> {
    /** The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby. */
    appDisplayName?: string;
    /** The identifier of the application. Required. Supports $filter (eq only) and $orderby. */
    appId?: string;
    /** The consent type of the request. Possible values are: Static and Dynamic. These represent static and dynamic permissions, respectively, requested in the consent workflow. Supports $filter (eq only) and $orderby. Required. */
    consentType?: string;
    /** A list of pending scopes waiting for approval. This is empty if the consentType is Static. Required. */
    pendingScopes?: AppConsentRequestScope[];
    /** A list of pending user consent requests. Supports $filter (eq). */
    userConsentRequests?: UserConsentRequest[];
}
