import {BaseCollectionPaginationCountResponse, RemoteAssistancePartner} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteAssistancePartnerCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RemoteAssistancePartner[];
}
