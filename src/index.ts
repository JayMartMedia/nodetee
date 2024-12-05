#!/usr/bin/env node

process.stdin.on('data', (data) => {
    const d = data.toString();
    process.stdout.write(d)
    // console.log('data: ', d);
});

process.stdin.on('error', (e) => {
    process.stderr.write(e.message)
    // console.error('error: ', e);
});

// process.stdin.on('end', () => {
//     console.log('end');
// });
