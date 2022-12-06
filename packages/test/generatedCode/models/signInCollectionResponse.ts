import {BaseCollectionPaginationCountResponse, SignIn} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SignInCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SignIn[];
}
