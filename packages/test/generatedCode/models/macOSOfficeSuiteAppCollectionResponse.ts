import {BaseCollectionPaginationCountResponse, MacOSOfficeSuiteApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MacOSOfficeSuiteAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MacOSOfficeSuiteApp[];
}
