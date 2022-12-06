import {BaseCollectionPaginationCountResponse, ObjectIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ObjectIdentityCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ObjectIdentity[];
}
