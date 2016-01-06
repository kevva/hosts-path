import pathExists from 'path-exists';
import test from 'ava';
import fn from './';

test(async t => {
	const exists = await pathExists(fn());
	t.true(exists);
});
