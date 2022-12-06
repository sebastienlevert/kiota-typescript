import {BaseCollectionPaginationCountResponse, TeamworkUserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkUserIdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: TeamworkUserIdentity[];
}
