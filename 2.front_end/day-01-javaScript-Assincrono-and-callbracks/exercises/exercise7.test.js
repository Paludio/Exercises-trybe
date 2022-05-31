const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

it('Teste da função uppercase', (done) => {
    uppercase('pablo', (str) => {
        try {
            expect(str).toBe('PABLO');
            done();
        } catch (error) {
            done(error);
        }
    });
 });