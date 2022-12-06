import {BaseCollectionPaginationCountResponse} from '../';
import {Media} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MediaCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Media[];
}
