import {Entity, InformationProtectionLabel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtectionPolicy extends Entity, Partial<Parsable> {
    /** The labels property */
    labels?: InformationProtectionLabel[];
}
