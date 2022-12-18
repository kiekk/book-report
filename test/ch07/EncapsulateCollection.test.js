import {expect} from 'chai';
import {Course, Person} from '../../src/ch07/EncapsulateCollection'

describe('Person', () => {
    it('can set courses', () => {
        const aPerson = new Person("Xuemin");
        const courses = [new Course("Math", true)];

        courses.forEach(course => aPerson.addCourse(course));

        expect(aPerson.name).to.equal("Xuemin");
        expect(aPerson.courses).to.eql(courses);
    });

    it('can add courses', () => {
        const aPerson = new Person("Xuemin");

        aPerson.addCourse(new Course("Math", false));
        aPerson.addCourse(new Course("Photography", false));

        expect(aPerson.name).to.equal("Xuemin");
        expect(aPerson.courses).to.eql([new Course("Math", false), new Course("Photography", false)]);
    });

    it('remove courses', () => {
        const aPerson = new Person("Xuemin");

        let courseToBeRemoved = new Course("Math", false);
        aPerson.addCourse(courseToBeRemoved);
        aPerson.addCourse(new Course("Photography", false));

        aPerson.removeCourse(courseToBeRemoved);

        expect(aPerson.courses).to.eql([new Course("Photography", false)]);
    });

});