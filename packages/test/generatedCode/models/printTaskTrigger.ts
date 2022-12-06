import {Entity, PrintTaskDefinition} from './index';
import {PrintEvent} from './printEvent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintTaskTrigger extends Entity, Partial<Parsable> {
    /** The definition property */
    definition?: PrintTaskDefinition;
    /** The event property */
    event?: PrintEvent;
}
