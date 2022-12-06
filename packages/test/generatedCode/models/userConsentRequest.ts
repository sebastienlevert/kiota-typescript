import {Approval, Request} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserConsentRequest extends Partial<Parsable>, Request {
    /** Approval decisions associated with a request. */
    approval?: Approval;
    /** The user's justification for requiring access to the app. Supports $filter (eq only) and $orderby. */
    reason?: string;
}
