import {OfficeGraphInsights} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemInsights extends OfficeGraphInsights, Partial<Parsable> {
}
