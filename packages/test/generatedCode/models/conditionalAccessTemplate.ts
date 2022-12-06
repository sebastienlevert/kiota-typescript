import {ConditionalAccessPolicyDetail, Entity} from './index';
import {TemplateScenarios} from './templateScenarios';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessTemplate extends Entity, Partial<Parsable> {
    /** The user-friendly name of the template. */
    description?: string;
    /** The details property */
    details?: ConditionalAccessPolicyDetail;
    /** The user-friendly name of the template. */
    name?: string;
    /** The scenarios property */
    scenarios?: TemplateScenarios;
}
