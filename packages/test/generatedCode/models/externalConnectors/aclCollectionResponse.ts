import {BaseCollectionPaginationCountResponse} from '../';
import {Acl} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AclCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Acl[];
}
