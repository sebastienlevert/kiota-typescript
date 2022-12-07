import {Entity} from '../';
import {InformationProtection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Security extends Entity, Partial<Parsable> {
    /** The informationProtection property */
    informationProtection?: InformationProtection;
}
