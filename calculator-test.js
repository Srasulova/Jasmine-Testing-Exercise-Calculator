describe("calculateMonthlyPayment", function () {
  it("should calculate the monthly payment correctly", function () {
    // Arrange
    const values = {
      amount: 10000,
      years: 3,
      rate: 5,
    };

    // Act
    const result = calculateMonthlyPayment(values);

    // Assert
    expect(result).toBe("299.71"); // Adjust the expected result based on your calculations
  });

  it("should return a result with 2 decimal places", function () {
    // Arrange
    const values = {
      amount: 10000,
      years: 3,
      rate: 5,
    };

    // Act
    const result = calculateMonthlyPayment(values);

    // Assert
    // Use a regular expression to match the format 'xx.xx'
    expect(result).toMatch(/^\d+\.\d{2}$/);
  });
});

/// etc
