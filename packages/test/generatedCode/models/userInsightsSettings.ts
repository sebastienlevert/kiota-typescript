import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserInsightsSettings extends Entity, Partial<Parsable> {
    /** true if user's itemInsights and meeting hours insights are enabled; false if user's itemInsights and meeting hours insights are disabled. Default is true. Optional. */
    isEnabled?: boolean;
}
