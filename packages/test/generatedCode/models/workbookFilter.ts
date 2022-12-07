import {Entity, WorkbookFilterCriteria} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookFilter extends Entity, Partial<Parsable> {
    /** The criteria property */
    criteria?: WorkbookFilterCriteria;
}
