import {BaseCollectionPaginationCountResponse, MailTips} from '../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetMailTipsResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MailTips[];
}
