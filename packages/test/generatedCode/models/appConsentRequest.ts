import {AppConsentRequestScope, Entity, UserConsentRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppConsentRequest extends Entity, Partial<Parsable> {
    /** The display name of the app for which consent is requested. Required. Supports $filter (eq only) and $orderby. */
    appDisplayName?: string;
    /** The identifier of the application. Required. Supports $filter (eq only) and $orderby. */
    appId?: string;
    /** A list of pending scopes waiting for approval. Required. */
    pendingScopes?: AppConsentRequestScope[];
    /** A list of pending user consent requests. Supports $filter (eq). */
    userConsentRequests?: UserConsentRequest[];
}
