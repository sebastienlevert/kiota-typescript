import {BaseCollectionPaginationCountResponse, KeyValue} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KeyValueCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: KeyValue[];
}
